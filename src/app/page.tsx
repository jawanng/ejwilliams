import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        padding: '6rem 0',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 32, 91, 0.9), rgba(0, 32, 91, 0.9)), url("https://placehold.co/1200x600/00205B/C5B358?text=Masonic+Lodge+Hero")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>E. Jerry Williams Lodge No. 141</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 2rem' }}>Making Good Men Better</p>
          <div className="flex gap-md" style={{ justifyContent: 'center' }}>
            <Link href="/join" className="btn btn-secondary">Become a Member</Link>
            <Link href="/events" className="btn" style={{ border: '1px solid var(--color-white)', color: 'var(--color-white)' }}>View Events</Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Welcome from the East</h2>
          </div>
          <div className="flex gap-md" style={{ alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                Greetings and welcome to the official website of E. Jerry Williams Lodge No. 141.
                We are dedicated to the principles of Brotherly Love, Relief, and Truth.
                Our lodge has a rich history of serving the community and fostering the personal growth of our members.
              </p>
              <p>
                Whether you are a traveling brother or a member of the community interested in learning more about Freemasonry,
                we invite you to explore our site and learn about our works.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <p style={{ fontWeight: 'bold', fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>Worshipful Master</p>
                <p style={{ color: 'var(--color-text-light)' }}>E. Jerry Williams Lodge No. 141</p>
              </div>
            </div>
            <div style={{ width: '300px', height: '300px', backgroundColor: '#ddd', borderRadius: 'var(--radius-md)', flexShrink: 0 }}>
              {/* Placeholder for WM Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/300x300?text=Worshipful+Master" alt="Worshipful Master" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features / Quick Links */}
      <section className="section" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div className="flex gap-md" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <div className="card" style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <h3>Our History</h3>
              <p>Learn about the legacy of E. Jerry Williams and the founding of our lodge.</p>
              <Link href="#" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 'bold' }}>Read More &rarr;</Link>
            </div>
            <div className="card" style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <h3>Community Service</h3>
              <p>Discover how we support our local community through charity and volunteer work.</p>
              <Link href="#" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 'bold' }}>View Projects &rarr;</Link>
            </div>
            <div className="card" style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <h3>Contact Us</h3>
              <p>Have questions? Reach out to our Secretary for more information.</p>
              <Link href="#" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 'bold' }}>Get in Touch &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
