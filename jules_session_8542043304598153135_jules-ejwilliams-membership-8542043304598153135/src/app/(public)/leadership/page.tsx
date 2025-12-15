export default function LeadershipPage() {
    const officers = [
        { title: 'Worshipful Master', name: 'Bro. John Smith' },
        { title: 'Senior Warden', name: 'Bro. David Jones' },
        { title: 'Junior Warden', name: 'Bro. Michael Brown' },
        { title: 'Treasurer', name: 'Bro. Robert Wilson' },
        { title: 'Secretary', name: 'Bro. James Davis' },
    ];

    return (
        <div className="container section">
            <div className="section-title">
                <h1>Lodge Leadership</h1>
            </div>

            <div className="flex gap-md" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                {officers.map((officer, index) => (
                    <div key={index} className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            backgroundColor: '#eee',
                            borderRadius: '50%',
                            margin: '0 auto 1rem',
                            backgroundImage: `url(https://placehold.co/100x100?text=${officer.title.split(' ').map(w => w[0]).join('')})`,
                            backgroundSize: 'cover'
                        }}></div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{officer.name}</h3>
                        <p style={{ color: 'var(--color-secondary-dark)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>{officer.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
