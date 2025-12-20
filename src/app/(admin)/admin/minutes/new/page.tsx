'use client';

import { createDocument } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

const initialState = {
    message: '',
    errors: {},
};

export default function NewDocumentPage() {
    const [state, dispatch] = useFormState(createDocument, initialState);

    return (
        <div className="container section">
            <h1>Create New Document</h1>
            <form action={dispatch} className="card" style={{ maxWidth: '600px' }}>
                <div className="flex flex-col gap-md">
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Title</label>
                        <input name="title" className="input" required style={{ width: '100%', padding: '0.5rem' }} />
                        {state?.errors?.title && <p style={{ color: 'red' }}>{state.errors.title.join(', ')}</p>}
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Upload File (PDF, Word, Excel)</label>
                        <input type="file" name="file" className="input" style={{ width: '100%', padding: '0.5rem' }} accept=".pdf,.doc,.docx,.xls,.xlsx" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Content (Optional if file uploaded)</label>
                        <textarea name="content" className="input" style={{ width: '100%', padding: '0.5rem', minHeight: '150px' }} placeholder="Enter content or URL" />
                        {state?.errors?.content && <p style={{ color: 'red' }}>{state.errors.content.join(', ')}</p>}
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Type</label>
                        <select name="type" className="input" required style={{ width: '100%', padding: '0.5rem' }}>
                            <option value="MINUTE">Minute</option>
                            <option value="REPORT">Report</option>
                            <option value="COMMUNICATION">Communication</option>
                            <option value="AGENDA">Agenda</option>
                            <option value="OTHER">Other</option>
                        </select>
                        {state?.errors?.type && <p style={{ color: 'red' }}>{state.errors.type.join(', ')}</p>}
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Date</label>
                        <input type="date" name="date" className="input" required style={{ width: '100%', padding: '0.5rem' }} />
                        {state?.errors?.date && <p style={{ color: 'red' }}>{state.errors.date.join(', ')}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary">Create Document</button>
                    {state?.message && <p style={{ color: 'red' }}>{state.message}</p>}
                </div>
            </form>
        </div>
    );
}
