import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export default async function MinutesPage() {
    const minutes = await prisma.document.findMany({
        where: { type: 'MINUTE' },
        orderBy: { date: 'desc' },
    });

    return (
        <div className="container section">
            <h1>Lodge Minutes</h1>
            {minutes.length === 0 ? (
                <p>No minutes available.</p>
            ) : (
                <div className="flex flex-col gap-md">
                    {minutes.map((doc) => (
                        <div key={doc.id} className="card">
                            <h3>{doc.title}</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>
                                {formatDate(doc.date)}
                            </p>
                            <div style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>{doc.content}</div>
                            {doc.fileName && (
                                <div className="flex gap-sm">
                                    <a href={`/api/documents/${doc.id}/download?inline=true`} target="_blank" className="btn btn-primary" style={{ display: 'inline-block', fontSize: '0.9rem', padding: '0.25rem 0.75rem' }}>
                                        View
                                    </a>
                                    <a href={`/api/documents/${doc.id}/download`} className="btn btn-secondary" style={{ display: 'inline-block', fontSize: '0.9rem', padding: '0.25rem 0.75rem' }}>
                                        Download
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
