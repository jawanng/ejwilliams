/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <div className="page-header" style={{
                backgroundImage: 'url(https://placehold.co/1280x300/00205B/C5B358?text=%20)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '80px 0',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-uppercase" style={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>About Us</h1>
                            <ul className="breadcrumb bg-transparent justify-content-center p-0 m-0">
                                <li className="breadcrumb-item"><Link href="/" className="text-white text-decoration-none">Home</Link></li>
                                <li className="breadcrumb-item active text-white" aria-current="page">About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main" role="main">
                <div id="content" className="content full py-5">
                    <div className="container">

                        {/* Our History Section */}
                        <div className="row mb-5">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img
                                    src="https://placehold.co/800x600/00205B/FFF?text=Historical+Lodge+Photo"
                                    alt="Lodge History"
                                    className="img-fluid rounded shadow-sm"
                                />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="text-primary mb-4">Our History</h2>
                                <p className="lead text-muted">A legacy of brotherhood and service since 1985.</p>
                                <p>
                                    E. Jerry Williams Lodge No. 141 has been a pillar of the community for four decades.
                                    Chartered on August 12, 1985, our lodge recently celebrated its 40th anniversary on August 12, 2025.
                                    Founded on the principles of Freemasonry, we have dedicated ourselves to the service of God,
                                    charity to our neighbors, and the betterment of ourselves.
                                </p>
                                <p>
                                    Our charter flows from the Most Worshipful Prince Hall Grand Lodge of Maryland.
                                    We carry the torch of those who came before us, maintaining the ancient landmarks
                                    and traditions of the craft while embracing the future.
                                </p>
                                <div className="mt-4">
                                    <Link href="/join" className="btn btn-primary">Join Our Legacy</Link>
                                </div>
                            </div>
                        </div>

                        {/* Mission & Values */}
                        <div className="row mb-5 bg-light py-5 rounded">
                            <div className="col-12 text-center mb-5">
                                <h2 className="text-primary">Our Mission & Values</h2>
                                <p className="lead text-muted">The three great tenets of a Mason&apos;s profession.</p>
                            </div>
                            <div className="col-md-4 text-center mb-4 mb-md-0">
                                <div className="p-3">
                                    <i className="fas fa-heart fa-3x text-secondary mb-3"></i>
                                    <h4>Brotherly Love</h4>
                                    <p className="text-muted">
                                        We regard the whole human species as one family, and we are tailored to support each other
                                        with dignity and respect.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center mb-4 mb-md-0">
                                <div className="p-3">
                                    <i className="fas fa-hands-helping fa-3x text-secondary mb-3"></i>
                                    <h4>Relief</h4>
                                    <p className="text-muted">
                                        To relieve the distressed is a duty incumbent on all men, but particularly on Masons.
                                        We soothe the unhappy and restore peace to their minds.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="p-3">
                                    <i className="fas fa-balance-scale fa-3x text-secondary mb-3"></i>
                                    <h4>Truth</h4>
                                    <p className="text-muted">
                                        Truth is a divine attribute and the foundation of every virtue. To be good and true
                                        is the first lesson we are taught in Masonry.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Leadership / Officers */}
                        <div className="row mb-5">
                            <div className="col-12 text-center mb-5">
                                <h2 className="text-primary">Lodge Officers</h2>
                                <p className="lead text-muted">The brethren elected to govern and serve the lodge.</p>
                            </div>

                            {/* Worshipful Master (Center) */}
                            <div className="col-md-4 offset-md-4 mb-4">
                                <div className="card border-0 shadow-sm h-100 text-center">
                                    <div className="card-body">
                                        <img
                                            src="https://placehold.co/150x150/00205B/C5B358?text=WM"
                                            className="rounded-circle mb-3 border border-3 border-warning"
                                            alt="Worshipful Master"
                                            width="150"
                                            height="150"
                                        />
                                        <h5 className="card-title text-primary font-weight-bold">Worshipful Master</h5>
                                        <p className="card-text text-muted">[Name Here]</p>
                                    </div>
                                </div>
                            </div>

                            {/* Other Officers Row 1 */}
                            <div className="col-md-3 mb-4">
                                <div className="card border-0 shadow-sm h-100 text-center">
                                    <div className="card-body">
                                        <img src="https://placehold.co/100x100?text=SW" className="rounded-circle mb-3" alt="Senior Warden" />
                                        <h6 className="card-title font-weight-bold">Senior Warden</h6>
                                        <p className="card-text small text-muted">[Name Here]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card border-0 shadow-sm h-100 text-center">
                                    <div className="card-body">
                                        <img src="https://placehold.co/100x100?text=JW" className="rounded-circle mb-3" alt="Junior Warden" />
                                        <h6 className="card-title font-weight-bold">Junior Warden</h6>
                                        <p className="card-text small text-muted">[Name Here]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card border-0 shadow-sm h-100 text-center">
                                    <div className="card-body">
                                        <img src="https://placehold.co/100x100?text=Sec" className="rounded-circle mb-3" alt="Secretary" />
                                        <h6 className="card-title font-weight-bold">Secretary</h6>
                                        <p className="card-text small text-muted">[Name Here]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="card border-0 shadow-sm h-100 text-center">
                                    <div className="card-body">
                                        <img src="https://placehold.co/100x100?text=Treas" className="rounded-circle mb-3" alt="Treasurer" />
                                        <h6 className="card-title font-weight-bold">Treasurer</h6>
                                        <p className="card-text small text-muted">[Name Here]</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Call to Action */}
                        <div className="row text-center mt-5">
                            <div className="col-md-8 offset-md-2">
                                <div className="card bg-primary text-white p-4">
                                    <div className="card-body">
                                        <h3 className="text-white mb-3">Intersted in Becoming a Freemason?</h3>
                                        <p className="mb-4">
                                            Freemasonry offers a unique opportunity for men of good character to improve themselves
                                            and serve their community.
                                        </p>
                                        <Link href="/join" className="btn btn-warning btn-lg text-dark fw-bold">
                                            Begin Your Journey
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
