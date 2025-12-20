import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Treasurer Reports & Communications',
};

export default async function ReportsPage() {
    const reports = await prisma.document.findMany({
        where: {
            type: {
                in: ['REPORT', 'COMMUNICATION']
            }
        },
        orderBy: { date: 'desc' },
    });

    return (
        <div className="container section">
            <h1 className="mb-lg">Reports & Communications</h1>
            {reports.length === 0 ? (
                <p>No reports or communications available.</p>
            ) : (
                <div className="flex flex-col gap-md">
                    {reports.map((doc) => (
                        <div key={doc.id} className="card">
                            <div className="flex justify-between items-start mb-sm">
                                <h3 className="text-xl font-bold">{doc.title}</h3>
                                <span className={`badge ${doc.type === 'REPORT' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} px-2 py-1 rounded text-xs`}>
                                    {doc.type}
                                </span>
                            </div>
                            <p className="text-sm mb-md" style={{ color: 'var(--color-text-light)' }}>
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
