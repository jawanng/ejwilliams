'use client';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { signInWithEmail } from '@/app/lib/auth-actions';

export default function LoginPage() {
    const [errorMessage, dispatch] = useActionState(authenticate, undefined);
    const [emailMode, setEmailMode] = useState(false);

    return (
        <div className="container section flex items-center" style={{ justifyContent: 'center', minHeight: '60vh' }}>
            <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
                <h1 className="text-center">Member Login</h1>

                <div className="flex justify-center gap-4 mb-4" style={{ marginTop: '1rem' }}>
                    <button
                        onClick={() => setEmailMode(false)}
                        style={{ fontWeight: !emailMode ? 'bold' : 'normal', borderBottom: !emailMode ? '2px solid var(--color-primary)' : 'none' }}
                    >
                        Password
                    </button>
                    <button
                        onClick={() => setEmailMode(true)}
                        style={{ fontWeight: emailMode ? 'bold' : 'normal', borderBottom: emailMode ? '2px solid var(--color-primary)' : 'none' }}
                    >
                        One-Time Link
                    </button>
                </div>

                {emailMode ? (
                    <form action={signInWithEmail}>
                        <p className="text-sm text-center mb-4">Enter your email and we&apos;ll send you a link to sign in instantly.</p>
                        <div className="flex flex-col gap-md">
                            <div>
                                <label htmlFor="magic-email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                                <input
                                    className="input"
                                    id="magic-email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    required
                                    style={{ width: '100%', padding: '0.5rem' }}
                                />
                            </div>
                            <MagicLinkButton />
                        </div>
                    </form>
                ) : (
                    <form action={dispatch}>
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
                                <div className="flex justify-between">
                                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
                                    <button type="button" onClick={() => setEmailMode(true)} className="text-sm" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Forgot Password?</button>
                                </div>
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
                )}
            </div>
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

function MagicLinkButton() {
    const { pending } = useFormStatus();

    return (
        <button className="btn btn-primary" aria-disabled={pending} style={{ width: '100%' }}>
            {pending ? 'Sending Link...' : 'Send Magic Link'}
        </button>
    );
}
