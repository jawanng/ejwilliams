'use client';

import { createUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export const dynamic = 'force-dynamic';

const initialState = {
    message: '',
    errors: {},
};

export default function NewUserPage() {
    // @ts-expect-error useFormState type mismatch in some generic cases
    const [state, dispatch] = useFormState(createUser, initialState);

    return (
        <div className="container section">
            <h1 className="mb-lg">Add New User</h1>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <form action={dispatch}>
                    <div className="form-group mb-sm">
                        <label className="label" htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" className="input" required />
                        {state?.errors?.name && <p className="error-text">{state.errors.name[0]}</p>}
                    </div>

                    <div className="form-group mb-sm">
                        <label className="label" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="input" required />
                        {state?.errors?.email && <p className="error-text">{state.errors.email[0]}</p>}
                    </div>

                    <div className="form-group mb-sm">
                        <label className="label" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="input" required minLength={6} />
                        {state?.errors?.password && <p className="error-text">{state.errors.password[0]}</p>}
                    </div>

                    <div className="form-group mb-md">
                        <label className="label" htmlFor="role">Role</label>
                        <select id="role" name="role" className="input" required defaultValue="MEMBER">
                            <option value="MEMBER">Member</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                        {state?.errors?.role && <p className="error-text">{state.errors.role[0]}</p>}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p className="error-text">{state?.message}</p>
                        <button type="submit" className="button">Create User</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
