import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { deleteUser } from '@/app/lib/actions';

export const dynamic = 'force-dynamic';

export default async function UsersPage() {
    const users = await prisma.user.findMany({
        orderBy: { name: 'asc' },
    });

    return (
        <div className="container section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 className="mb-lg">Users</h1>
                <Link href="/admin/users/new" className="button">
                    Add User
                </Link>
            </div>

            <div className="card">
                <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
                            <th className="p-sm">Name</th>
                            <th className="p-sm">Email</th>
                            <th className="p-sm">Role</th>
                            <th className="p-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td className="p-sm">{user.name}</td>
                                <td className="p-sm">{user.email}</td>
                                <td className="p-sm">{user.role}</td>
                                <td className="p-sm" style={{ display: 'flex', gap: '10px' }}>
                                    <Link href={`/admin/users/${user.id}/edit`} className="button-outline" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>
                                        Edit
                                    </Link>
                                    <form action={deleteUser.bind(null, user.id)}>
                                        <button type="submit" className="button-outline" style={{ padding: '5px 10px', fontSize: '0.8rem', color: 'red', borderColor: 'red' }}>
                                            Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
