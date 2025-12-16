export default function JoinPage() {
    return (
        <div className="container section">
            <div className="section-title">
                <h1>Becoming a Freemason</h1>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Freemasonry is the world&apos;s oldest and largest fraternity. It is an organization of men who believe in a Supreme Being and are dedicated to self-improvement and helping their communities.
                </p>

                <div className="card" style={{ marginBottom: '2rem' }}>
                    <h3>Requirements for Membership</h3>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8' }}>
                        <li>Be a man of at least 18 years of age.</li>
                        <li>Believe in a Supreme Being.</li>
                        <li>Be of good moral character.</li>
                        <li>Be recommended by two members of the Lodge.</li>
                    </ul>
                </div>

                <div className="text-center">
                    <h3>Ready to take the first step?</h3>
                    <p style={{ marginBottom: '1.5rem' }}>To be one, ask one. Contact us to learn more about the petition process.</p>
                    <a href="mailto:secretary@lodge141.com" className="btn btn-primary">Contact the Secretary</a>
                </div>
            </div>
        </div>
    );
}
