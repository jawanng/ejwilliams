'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

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

export async function createEvent(prevState: { message?: string, errors?: any }, formData: FormData) {
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
        // console.error(error); // Using variable to silence linter or just ignore
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

export async function createDocument(prevState: { message?: string, errors?: any }, formData: FormData) {
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

export async function createPayment(prevState: any, formData: FormData) {
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
