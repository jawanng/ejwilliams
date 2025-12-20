import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user) {
        redirect('/login');
    }

    if (session.user.role === 'ADMIN') {
        redirect('/admin');
    }

    return (
        <div className="container section">
            <h1 className="mb-lg">Welcome, {session.user.name}</h1>
            <p className="mb-md">Welcome to the Member Area.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <a href="/minutes" className="card">
                    <h3>Meeting Minutes</h3>
                    <p>View archive of meeting minutes.</p>
                </a>
                <a href="/directory" className="card">
                    <h3>Member Directory</h3>
                    <p>Connect with other brothers.</p>
                </a>
                <a href="/payments" className="card">
                    <h3>Payments</h3>
                    <p>Manage your dues and payments.</p>
                </a>
                <a href="/events" className="card">
                    <h3>Events</h3>
                    <p>See upcoming events.</p>
                </a>
            </div>
        </div>
    );
}
