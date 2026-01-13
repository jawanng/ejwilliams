'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { auth } from '@/auth';

const CommunityWorkSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    imageData: z.string().optional(), // Base64 string for upload
    mimeType: z.string().optional(),
});

export async function createCommunityWork(formData: FormData) {
    const session = await auth();
    if (!session || session?.user?.role !== 'ADMIN') {
        throw new Error('Unauthorized');
    }

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const imageFile = formData.get('image') as File;

    let imageData: Buffer | undefined;
    let mimeType: string | undefined;

    if (imageFile && imageFile.size > 0) {
        const arrayBuffer = await imageFile.arrayBuffer();
        imageData = Buffer.from(arrayBuffer);
        mimeType = imageFile.type;
    }

    await prisma.communityWork.create({
        data: {
            title,
            description,
            imageData,
            mimeType,
        },
    });

    revalidatePath('/admin/community');
    revalidatePath('/community');
    redirect('/admin/community');
}

export async function updateCommunityWork(id: string, formData: FormData) {
    const session = await auth();
    if (!session || session?.user?.role !== 'ADMIN') {
        throw new Error('Unauthorized');
    }

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const imageFile = formData.get('image') as File;

    const data: any = {
        title,
        description,
    };

    if (imageFile && imageFile.size > 0) {
        const arrayBuffer = await imageFile.arrayBuffer();
        data.imageData = Buffer.from(arrayBuffer);
        data.mimeType = imageFile.type;
    }

    await prisma.communityWork.update({
        where: { id },
        data,
    });

    revalidatePath('/admin/community');
    revalidatePath('/community');
    redirect('/admin/community');
}

export async function deleteCommunityWork(id: string) {
    const session = await auth();
    if (!session || session?.user?.role !== 'ADMIN') {
        throw new Error('Unauthorized');
    }

    await prisma.communityWork.delete({
        where: { id },
    });

    revalidatePath('/admin/community');
    revalidatePath('/community');
}
