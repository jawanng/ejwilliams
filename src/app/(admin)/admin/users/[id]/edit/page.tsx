import { updateUser } from '@/app/lib/actions';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import EditUserForm from './form';

export const dynamic = 'force-dynamic';

export default async function EditUserPage({ params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: params.id },
    });

    if (!user) {
        notFound();
    }

    return (
        <div className="container section">
            <h1 className="mb-lg">Edit User</h1>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <EditUserForm user={user} updateUser={updateUser.bind(null, user.id)} />
            </div>
        </div>
    );
}
