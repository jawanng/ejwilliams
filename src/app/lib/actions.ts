'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', { ...Object.fromEntries(formData), redirectTo: '/dashboard' });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

const CreateEventSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.string(),
    location: z.string().min(1),
    isPublic: z.string().optional(),
});

type FormState = {
    message?: string;
    errors?: Record<string, string[]>;
};

export async function createEvent(prevState: FormState, formData: FormData) {
    const validatedFields = CreateEventSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        date: formData.get('date'),
        location: formData.get('location'),
        isPublic: formData.get('isPublic'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Event.',
        };
    }

    const { title, description, date, location, isPublic } = validatedFields.data;

    try {
        await prisma.event.create({
            data: {
                title,
                description,
                date: new Date(date),
                location,
                isPublic: isPublic === 'on',
            },
        });
    } catch (error) {
        // console.error(error); 
        return {
            message: 'Database Error: Failed to Create Event.',
        };
    }

    revalidatePath('/events');
    revalidatePath('/admin/events');
    redirect('/admin/events');
}

const CreateDocumentSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    type: z.string(),
    date: z.string(),
});

export async function createDocument(prevState: FormState, formData: FormData) {
    const validatedFields = CreateDocumentSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content'),
        type: formData.get('type'),
        date: formData.get('date'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Document.',
        };
    }

    const { title, content, type, date } = validatedFields.data;

    try {
        await prisma.document.create({
            data: {
                title,
                content,
                type,
                date: new Date(date),
            },
        });
    } catch (error) {
        // console.error(error);
        return {
            message: 'Database Error: Failed to Create Document.',
        };
    }

    revalidatePath('/minutes');
    revalidatePath('/admin/minutes');
    redirect('/admin/minutes');
}

export async function createPayment(prevState: FormState | undefined, formData: FormData) {
    const amount = parseFloat(formData.get('amount') as string);
    const description = formData.get('description') as string;
    const userId = formData.get('userId') as string;

    try {
        await prisma.payment.create({
            data: {
                userId,
                amount,
                description,
                status: 'COMPLETED', // Mocking successful payment
            },
        });
        revalidatePath('/payments');
    } catch (error) {
        // console.error(error);
        return { message: 'Database Error: Failed to Process Payment.' };
    }
}

export async function deleteDocument(id: string, formData: FormData) {
    try {
        await prisma.document.delete({
            where: { id },
        });
        revalidatePath('/minutes');
        revalidatePath('/admin/minutes');
    } catch (error) {
        throw error;
    }
}

export async function deleteEvent(id: string, formData: FormData) {
    try {
        await prisma.event.delete({
            where: { id },
        });
        revalidatePath('/events');
        revalidatePath('/admin/events');
    } catch (error) {
        throw error;
    }
}

const UserSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters').optional(),
    role: z.enum(['ADMIN', 'MEMBER'], { message: 'Please select a valid role' }),
});

export async function createUser(prevState: FormState, formData: FormData) {
    const validatedFields = UserSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        role: formData.get('role'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create User.',
        };
    }

    const { name, email, password, role } = validatedFields.data;

    if (!password) {
        return {
            message: 'Password is required for new users.',
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create User (Email might already exist).',
        };
    }

    revalidatePath('/admin/users');
    redirect('/admin/users');
}

export async function updateUser(id: string, prevState: FormState, formData: FormData) {
    const validatedFields = UserSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'), // Optional in schema, logic handled below
        role: formData.get('role'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update User.',
        };
    }

    const { name, email, password, role } = validatedFields.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {
        name,
        email,
        role,
    };

    if (password && password.length >= 6) {
        updateData.password = await bcrypt.hash(password, 10);
    }

    try {
        await prisma.user.update({
            where: { id },
            data: updateData,
        });
    } catch (error) {
        return {
            message: 'Database Error: Failed to Update User.',
        };
    }

    revalidatePath('/admin/users');
    redirect('/admin/users');
}

export async function deleteUser(id: string, formData: FormData) {
    try {
        await prisma.user.delete({
            where: { id },
        });
        revalidatePath('/admin/users');
    } catch (error) {
        throw error;
    }
}
