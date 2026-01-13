import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { deleteCommunityWork } from '@/app/lib/actions/community';

export const dynamic = 'force-dynamic';

export default async function CommunityAdminPage() {
    const works = await prisma.communityWork.findMany({
        orderBy: { date: 'desc' },
    });

    return (
        <div className="container py-5">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Community Works Management</h1>
                <Link href="/admin/community/new" className="btn btn-primary">
                    Add New Work
                </Link>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {works.map((work) => (
                            <tr key={work.id}>
                                <td>
                                    {work.imageData ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={`/api/images/community/${work.id}`}
                                            alt={work.title}
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div style={{ width: '50px', height: '50px', background: '#eee' }}></div>
                                    )}
                                </td>
                                <td>{work.title}</td>
                                <td>{work.description.substring(0, 50)}...</td>
                                <td>{new Date(work.date).toLocaleDateString()}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <Link href={`/admin/community/${work.id}`} className="btn btn-sm btn-outline-primary">
                                            Edit
                                        </Link>
                                        <form action={deleteCommunityWork.bind(null, work.id)} className="d-inline">
                                            <button
                                                type="submit"
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={(e) => {
                                                    if (!confirm('Are you sure you want to delete this item?')) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {works.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center">No community works found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
