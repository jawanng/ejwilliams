import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { PaymentForm } from '@/app/ui/payment-form';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Event Tickets',
};

export default async function TicketsPage() {
    const session = await auth();
    const user = await prisma.user.findUnique({
        where: { email: session?.user?.email || '' },
    });

    const events = await prisma.event.findMany({
        where: { date: { gte: new Date() } },
        orderBy: { date: 'asc' },
    });

    return (
        <div className="container section">
            <h1 className="mb-lg">Buy Event Tickets</h1>
            {events.length === 0 ? (
                <p>No upcoming events available for ticket purchase.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    {events.map((event) => (
                        <div key={event.id} className="card">
                            <h2 className="text-xl font-bold mb-sm">{event.title}</h2>
                            <p className="mb-sm text-sm" style={{ color: 'var(--color-text-light)' }}>
                                {formatDate(event.date)} @ {event.location}
                            </p>
                            <p className="mb-md">{event.description}</p>
                            {user && (
                                <div className="border-t pt-md mt-md">
                                    <h4 className="font-bold mb-xs">Buy Ticket</h4>
                                    <PaymentForm
                                        userId={user.id}
                                        amount={50} // Fixed price for now
                                        description={`Ticket for ${event.title}`}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
