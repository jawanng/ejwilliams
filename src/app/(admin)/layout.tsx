import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{ backgroundColor: '#222', padding: '1rem', color: '#fff' }}>
                <div className="container flex justify-between items-center">
                    <div style={{ fontWeight: 'bold' }}>Lodge 141 Admin</div>
                    <nav className="flex gap-md">
                        <Link href="/admin" style={{ color: '#fff' }}>Dashboard</Link>
                        <Link href="/admin/events" style={{ color: '#fff' }}>Events</Link>
                        <Link href="/admin/minutes" style={{ color: '#fff' }}>Minutes</Link>
                        <Link href="/admin/payments" style={{ color: '#fff' }}>Payments</Link>
                        <Link href="/admin/users" style={{ color: '#fff', fontWeight: 'bold' }}>Users</Link>
                        <Link href="/" style={{ color: '#aaa', marginLeft: '20px' }}>Back to Site</Link>
                    </nav>
                </div>
            </header>
            <main style={{ flex: 1 }}>
                {children}
            </main>
        </div>
    );
}
