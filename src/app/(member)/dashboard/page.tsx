export default function MemberDashboard() {
    return (
        <div className="container section">
            <h1>Member Dashboard</h1>
            <p>Welcome, Brother. Here you can access lodge resources.</p>
            <div className="flex gap-md">
                <a href="/minutes" className="btn btn-primary">View Minutes</a>
                <a href="/payments" className="btn btn-secondary">Pay Dues</a>
            </div>
        </div>
    );
}
