'use client';

import { useFormState } from 'react-dom';
import { User } from '@prisma/client';

const initialState = {
    message: '',
    errors: {},
};

// Define the shape of the state based on what actions.ts returns
type FormState = {
    message?: string;
    errors?: Record<string, string[]>;
};

export default function EditUserForm({ user, updateUser }: { user: User, updateUser: (prevState: FormState, formData: FormData) => Promise<FormState> }) {

    const [state, dispatch] = useFormState(updateUser, initialState);

    return (
        <form action={dispatch}>
            <div className="form-group mb-sm">
                <label className="label" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="input" required defaultValue={user.name || ''} />
                {state?.errors?.name && <p className="error-text">{state.errors.name[0]}</p>}
            </div>

            <div className="form-group mb-sm">
                <label className="label" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="input" required defaultValue={user.email || ''} />
                {state?.errors?.email && <p className="error-text">{state.errors.email[0]}</p>}
            </div>

            <div className="form-group mb-sm">
                <label className="label" htmlFor="password">Password (Leave blank to keep current)</label>
                <input type="password" id="password" name="password" className="input" minLength={6} placeholder="New Password" />
                {state?.errors?.password && <p className="error-text">{state.errors.password[0]}</p>}
            </div>

            <div className="form-group mb-md">
                <label className="label" htmlFor="role">Role</label>
                <select id="role" name="role" className="input" required defaultValue={user.role}>
                    <option value="MEMBER">Member</option>
                    <option value="ADMIN">Admin</option>
                </select>
                {state?.errors?.role && <p className="error-text">{state.errors.role[0]}</p>}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="error-text">{state?.message}</p>
                <button type="submit" className="button">Update User</button>
            </div>
        </form>
    );
}
