import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { deleteDocument } from '@/app/lib/actions';

export default async function AdminMinutesPage() {
    const documents = await prisma.document.findMany({
        orderBy: { date: 'desc' },
    });

    return (
        <div className="container section">
            <div className="flex justify-between items-center mb-lg">
                <h1>Manage Documents</h1>
                <Link href="/admin/minutes/new" className="btn btn-primary">Create Document</Link>
            </div>
            
            {documents.length === 0 ? (
                <p>No documents found.</p>
            ) : (
                <div className="flex flex-col gap-md">
                    {documents.map((doc) => (
                        <div key={doc.id} className="card flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">{doc.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                                    {doc.type} - {formatDate(doc.date)}
                                </p>
                            </div>
                            <form action={deleteDocument.bind(null, doc.id)}>
                                <button className="btn btn-secondary text-sm">Delete</button>
                            </form>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
