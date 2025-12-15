import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Member Directory',
};

export default async function DirectoryPage() {
    const members = await prisma.user.findMany({
        where: {
            role: 'MEMBER', 
        },
        select: {
            name: true,
            email: true,
            role: true,
        },
    });

    return (
        <div className="container section">
            <h1 className="mb-lg">Member Directory</h1>
            <div className="card">
                <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
                            <th className="p-sm">Name</th>
                            <th className="p-sm">Email</th>
                            <th className="p-sm">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => (
                            <tr key={member.email} style={{ borderBottom: '1px solid #eee' }}>
                                <td className="p-sm">{member.name}</td>
                                <td className="p-sm">{member.email}</td>
                                <td className="p-sm">{member.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
