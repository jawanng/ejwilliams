import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function MemberDashboard() {
    const session = await auth();

    if (!session?.user) {
        redirect('/login');
    }

    if (session.user.role === 'ADMIN') {
        redirect('/admin');
    }

    return (
        <div className="container section">
            <h1 className="mb-md">Member Dashboard</h1>
            <p className="mb-lg">Welcome, Brother. Here you can access lodge resources.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                <div className="card">
                    <h2 className="text-xl mb-sm">Minutes & Reports</h2>
                    <p className="mb-md">Read the minutes of past meetings and treasurer&apos;s reports.</p>
                    <div className="flex gap-sm">
                        <Link href="/minutes" className="btn btn-primary">View Minutes</Link>
                        <Link href="/reports" className="btn btn-secondary">View Reports</Link>
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-xl mb-sm">Dues & Payments</h2>
                    <p className="mb-md">Pay your annual dues and view your payment history.</p>
                    <Link href="/payments" className="btn btn-primary">Manage Payments</Link>
                </div>

                <div className="card">
                    <h2 className="text-xl mb-sm">Events</h2>
                    <p className="mb-md">Buy tickets to upcoming events.</p>
                    <Link href="/tickets" className="btn btn-primary">Buy Tickets</Link>
                </div>

                <div className="card">
                    <h2 className="text-xl mb-sm">Member Directory</h2>
                    <p className="mb-md">Contact information for other members.</p>
                    <Link href="/directory" className="btn btn-primary">View Directory</Link>
                </div>
            </div>
        </div>
    );
}
