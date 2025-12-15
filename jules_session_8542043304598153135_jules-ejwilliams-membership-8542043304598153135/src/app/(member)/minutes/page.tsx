import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';

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
                            <div style={{ whiteSpace: 'pre-wrap' }}>{doc.content}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
