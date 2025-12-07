'use client';

import { createEvent } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

const initialState = {
    message: '',
    errors: {},
};

export default function NewEventPage() {
    const [state, dispatch] = useFormState(createEvent, initialState);

    return (
        <div className="container section">
            <h1>Create New Event</h1>
            <form action={dispatch} className="card" style={{ maxWidth: '600px' }}>
                <div className="flex flex-col gap-md">
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Title</label>
                        <input name="title" className="input" required style={{ width: '100%', padding: '0.5rem' }} />
                        {state?.errors?.title && <p style={{ color: 'red' }}>{state.errors.title.join(', ')}</p>}
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
                        <textarea name="description" className="input" required style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }} />
                        {state?.errors?.description && <p style={{ color: 'red' }}>{state.errors.description.join(', ')}</p>}
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Date</label>
                        <input type="datetime-local" name="date" className="input" required style={{ width: '100%', padding: '0.5rem' }} />
                        {state?.errors?.date && <p style={{ color: 'red' }}>{state.errors.date.join(', ')}</p>}
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Location</label>
                        <input name="location" className="input" required style={{ width: '100%', padding: '0.5rem' }} />
                        {state?.errors?.location && <p style={{ color: 'red' }}>{state.errors.location.join(', ')}</p>}
                    </div>
                    <div className="flex items-center gap-md">
                        <input type="checkbox" name="isPublic" id="isPublic" />
                        <label htmlFor="isPublic">Public Event</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Create Event</button>
                    {state?.message && <p style={{ color: 'red' }}>{state.message}</p>}
                </div>
            </form>
        </div>
    );
}
