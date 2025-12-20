import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Event } from '@prisma/client';
import { DeleteEventButton } from '@/app/ui/delete-event-button';

export const dynamic = 'force-dynamic';

export default async function AdminEventsPage() {
    const events = await prisma.event.findMany({
        orderBy: { date: 'desc' },
    });

    return (
        <div className="container section">
            <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                <h1>Manage Events</h1>
                <a href="/admin/events/new" className="btn btn-primary">Create New Event</a>
            </div>

            <div className="flex flex-col gap-md">
                {events.map((event: Event) => (
                    <div key={event.id} className="card flex justify-between items-center">
                        <div>
                            <h3>{event.title}</h3>
                            <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                                {formatDate(event.date)} - {event.isPublic ? 'Public' : 'Private'}
                            </p>
                        </div>
                        <DeleteEventButton id={event.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}
