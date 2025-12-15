'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginPage() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <div className="container section flex items-center" style={{ justifyContent: 'center', minHeight: '60vh' }}>
            <form action={dispatch} className="card" style={{ width: '100%', maxWidth: '400px' }}>
                <h1 className="text-center">Member Login</h1>
                <div className="flex flex-col gap-md">
                    <div>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                        <input
                            className="input"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            style={{ width: '100%', padding: '0.5rem' }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
                        <input
                            className="input"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            minLength={6}
                            style={{ width: '100%', padding: '0.5rem' }}
                        />
                    </div>
                    <LoginButton />
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {errorMessage && (
                            <p style={{ color: 'var(--color-error)' }}>{errorMessage}</p>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button className="btn btn-primary" aria-disabled={pending} style={{ width: '100%' }}>
            {pending ? 'Logging in...' : 'Log in'}
        </button>
    );
}
