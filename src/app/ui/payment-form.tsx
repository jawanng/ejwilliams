'use client';

import { createPayment } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

const initialState = {
    message: '',
};

export function PaymentForm({ userId, amount, description }: { userId: string, amount: number, description: string }) {
    const [state, dispatch] = useFormState(createPayment, initialState);

    return (
        <form action={dispatch}>
            <input type="hidden" name="userId" value={userId} />
            <input type="hidden" name="amount" value={amount.toString()} />
            <input type="hidden" name="description" value={description} />
            <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Pay Now (Mock)</button>
            {state?.message && <p style={{ color: 'red', marginTop: '0.5rem' }}>{state.message}</p>}
        </form>
    );
}
