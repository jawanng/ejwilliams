import { updateCommunityWork } from '@/app/lib/actions/community';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditCommunityWorkPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const work = await prisma.communityWork.findUnique({
        where: { id },
    });

    if (!work) {
        notFound();
    }

    return (
        <div className="container py-5">
            <h1 className="text-2xl font-bold mb-4">Edit Community Work</h1>

            <form action={updateCommunityWork.bind(null, id)} className="max-w-2xl">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        defaultValue={work.title}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description / Blurb</label>
                    <textarea
                        name="description"
                        id="description"
                        className="form-control"
                        rows={5}
                        defaultValue={work.description}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image (Upload to replace)</label>
                    <input type="file" name="image" id="image" className="form-control" accept="image/*" />

                    {work.imageData && (
                        <div className="mt-2">
                            <p className="text-sm text-gray-500 mb-1">Current Image:</p>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`/api/images/community/${work.id}`}
                                alt={work.title}
                                style={{ maxWidth: '200px', height: 'auto', border: '1px solid #ddd' }}
                            />
                        </div>
                    )}
                </div>

                <div className="flex gap-3 mt-4">
                    <button type="submit" className="btn btn-primary">Update Work</button>
                    <Link href="/admin/community" className="btn btn-secondary">Cancel</Link>
                </div>
            </form>
        </div>
    );
}
