'use client';

import { deleteEvent } from '@/app/lib/actions';

export function DeleteEventButton({ id }: { id: string }) {
    const deleteEventWithId = deleteEvent.bind(null, id);

    return (
        <form action={deleteEventWithId}>
            <button className="btn" style={{ backgroundColor: 'var(--color-error)', color: 'white' }}>
                Delete
            </button>
        </form>
    );
}
