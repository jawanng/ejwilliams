import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const document = await prisma.document.findUnique({
        where: { id: params.id },
        select: { fileData: true, mimeType: true, fileName: true },
    });

    if (!document || !document.fileData || !document.fileName) {
        return notFound();
    }

    const headers = new Headers();
    headers.set('Content-Type', document.mimeType || 'application/octet-stream');
    headers.set('Content-Disposition', `attachment; filename="${document.fileName}"`);

    return new NextResponse(document.fileData, {
        status: 200,
        headers,
    });
}
