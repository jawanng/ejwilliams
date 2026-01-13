import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const item = await prisma.communityWork.findUnique({
        where: { id },
        select: { imageData: true, mimeType: true },
    });

    if (!item || !item.imageData) {
        return new NextResponse('Not found', { status: 404 });
    }

    // Cast to any to satisfy TS (Buffer is compatible at runtime in Node env)
    const response = new NextResponse(item.imageData as any);
    response.headers.set('Content-Type', item.mimeType || 'image/jpeg');
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    return response;
}
