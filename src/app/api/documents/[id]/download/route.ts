import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;

    const document = await prisma.document.findUnique({
        where: { id: params.id },
        select: { fileData: true, mimeType: true, fileName: true },
    });

    if (!document || !document.fileData || !document.fileName) {
        return notFound();
    }

    const { searchParams } = new URL(request.url);
    const inline = searchParams.get('inline') === 'true';

    const headers = new Headers();
    headers.set('Content-Type', document.mimeType || 'application/octet-stream');
    headers.set('Content-Disposition', `${inline ? 'inline' : 'attachment'}; filename="${document.fileName}"`);

    return new NextResponse(new Uint8Array(document.fileData), {
        status: 200,
        headers,
    });
}
