import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { PaymentForm } from '@/app/ui/payment-form';
import { Payment } from '@prisma/client';

export const dynamic = 'force-dynamic';

export default async function PaymentsPage() {
    const session = await auth();
    if (!session?.user?.email) return null;

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: { payments: { orderBy: { createdAt: 'desc' } } },
    });

    if (!user) return null;

    return (
        <div className="container section">
            <h1>Payments & Dues</h1>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <h3>Pay Dues</h3>
                <p>Annual Dues: $100.00</p>
                <PaymentForm userId={user.id} amount={100} description="Annual Dues 2025" />
            </div>

            <h2>Payment History</h2>
            {user.payments.length === 0 ? (
                <p>No payment history.</p>
            ) : (
                <div className="flex flex-col gap-md">
                    {user.payments.map((payment: Payment) => (
                        <div key={payment.id} className="card flex justify-between">
                            <div>
                                <p><strong>{payment.description}</strong></p>
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
            )}
        </div>
    );
}
