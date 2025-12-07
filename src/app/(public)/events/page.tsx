import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Event } from '@prisma/client';

export default async function EventsPage() {
    const events = await prisma.event.findMany({
        where: { isPublic: true },
        orderBy: { date: 'asc' },
    });

    return (
        <div className="container section">
            <div className="section-title">
                <h1>Upcoming Events</h1>
            </div>

            {events.length === 0 ? (
                <p className="text-center" style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    No upcoming events scheduled at this time. Please check back later.
                </p>
            ) : (
                <div className="flex flex-col gap-md" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {events.map((event: Event) => (
                        <div key={event.id} className="card">
                            <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{event.title}</h3>
                                <span style={{
                                    backgroundColor: 'var(--color-secondary)',
                                    color: 'var(--color-primary)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>
                                    {formatDate(event.date)}
                                </span>
                            </div>
                            <p className="text-sm" style={{ color: 'var(--color-text-light)', marginBottom: '1rem', fontStyle: 'italic' }}>
                                Location: {event.location}
                            </p>
                            <p style={{ lineHeight: '1.6' }}>{event.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

