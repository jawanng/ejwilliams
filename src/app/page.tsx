import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section - Static Parallax Style */}
      <div className="hero-section clearfix" style={{ minHeight: '600px', overflow: 'hidden', position: 'relative' }}>
        <div style={{
          backgroundImage: 'url(/images/ejw2026.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          gap: '40px',
          padding: '20px'
        }}>
          <div className="container">
            <h1 className="hero-title text-white font-weight-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)', lineHeight: '1.2', marginBottom: '30px', marginTop: '0', position: 'relative', fontSize: '3.5rem' }}>
              Making Good Men Better
            </h1>
            <p className="lead" style={{ fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.6)', marginBottom: '40px', position: 'relative' }}>
              Welcome to E. Jerry Williams Lodge No. 141
            </p>
            <div className="mt-4">
              <Link href="/join" className="btn btn-primary btn-lg me-3">Become a Member</Link>
              <Link href="/events" className="btn btn-outline-light btn-lg" style={{ borderWidth: '2px', borderColor: '#ffffff', color: '#ffffff', borderStyle: 'solid', opacity: '1' }}>View Events</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Bar */}
      <div className="notice-bar bg-light py-4 border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg-0">
              <div className="d-flex align-items-center">
                <i className="fas fa-calendar-alt fa-2x me-3 text-primary"></i>
                <div>
                  <span className="d-block text-uppercase small text-muted">Next</span>
                  <strong className="text-dark">Upcoming Event</strong>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12 mb-3 mb-lg-0">
              <h5 className="mb-0"><Link href="/events" className="text-dark text-decoration-none">Stated Meeting</Link></h5>
              <span className="text-muted small">First & Third Wednesdays | 7:30 PM</span>
            </div>
            <div className="col-lg-4 col-12">
              <Link href="/events" className="btn btn-primary d-block d-lg-inline-block w-100">All Events</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main" role="main">
        <div id="content" className="content full py-5">
          <div className="container">

            {/* Featured Blocks */}
            <div className="featured-blocks clearfix mb-5">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="img-thumbnail border-0 shadow-sm p-2 bg-white h-100 text-center">
                    <Link href="/about" className="d-block mb-3">
                      <img src="https://placehold.co/600x400/00205B/FFF?text=Our+History" alt="History" className="img-fluid rounded" />
                    </Link>
                    <h4><Link href="/about" className="text-dark text-decoration-none">Our History</Link></h4>
                    <p className="text-muted">Learn about the legacy of E. Jerry Williams and our founding.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="img-thumbnail border-0 shadow-sm p-2 bg-white h-100 text-center">
                    <Link href="/join" className="d-block mb-3">
                      <img src="https://placehold.co/600x400/C5B358/000?text=Join+Us" alt="Join" className="img-fluid rounded" />
                    </Link>
                    <h4><Link href="/join" className="text-dark text-decoration-none">Join the Craft</Link></h4>
                    <p className="text-muted">Discover the path to becoming a Freemason.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="img-thumbnail border-0 shadow-sm p-2 bg-white h-100 text-center">
                    <Link href="/charity" className="d-block mb-3">
                      <img src="https://placehold.co/600x400/EEE/333?text=Community" alt="Community" className="img-fluid rounded" />
                    </Link>
                    <h4><Link href="/charity" className="text-dark text-decoration-none">Community</Link></h4>
                    <p className="text-muted">We support local charities and community initiatives.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Welcome Section */}
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4 text-uppercase text-primary">Welcome from the East</h2>
                <p className="lead">Greetings and welcome to the official website of E. Jerry Williams Lodge No. 141.</p>
                <p>
                  We are dedicated to the principles of Brotherly Love, Relief, and Truth.
                  Our lodge has a rich history of serving the community and fostering the personal growth of our members.
                  Whether you are a traveling brother or a member of the community interested in learning more about Freemasonry,
                  we invite you to explore our site and learn about our works.
                </p>
                <div className="mt-4 border-start border-4 border-primary ps-3">
                  <p className="mb-0 fw-bold">Worshipful Master Miguel Espeut</p>
                  <small className="text-muted">E. Jerry Williams Lodge No. 141</small>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="card border-0 bg-light p-3 text-center">
                  <img src="/images/wm-miguel.jpg" alt="WM Miguel Espeut" className="img-fluid rounded-circle mx-auto mb-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                  <h5>Worshipful Master Miguel Espeut</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
