import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Payment, User } from '@prisma/client';

export const dynamic = 'force-dynamic';

type PaymentWithUser = Payment & { user: User };

export default async function AdminPaymentsPage() {
    const payments = await prisma.payment.findMany({
        include: { user: true },
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="container section">
            <h1>Payment Records</h1>

            <div className="flex flex-col gap-md">
                {payments.map((payment: PaymentWithUser) => (
                    <div key={payment.id} className="card flex justify-between">
                        <div>
                            <p><strong>{payment.user.name} ({payment.user.email})</strong></p>
                            <p>{payment.description}</p>
                            <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{formatDate(payment.createdAt)}</p>
                        </div>
                        <div>
                            <span style={{
                                color: payment.status === 'COMPLETED' ? 'var(--color-success)' : 'var(--color-error)',
                                fontWeight: 'bold'
                            }}>
                                ${payment.amount.toFixed(2)} - {payment.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
