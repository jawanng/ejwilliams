'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <>
            {/* Main Footer */}
            <footer className="site-footer" style={{ padding: '60px 0', backgroundColor: '#222', color: '#999' }}>
                <div className="container">
                    <div className="row">
                        {/* About Widget */}
                        <div className="col-lg-4 col-md-4 col-sm-12 widget footer-widget mb-4">
                            <h4 className="footer-widget-title" style={{ color: '#fff', marginBottom: '20px' }}>About E. Jerry Williams No. 141</h4>
                            <p>
                                Dedicated to Brotherhood, Relief, and Truth. We are a community focused on making good men better and serving our local community.
                            </p>
                        </div>

                        {/* Quick Links Widget */}
                        <div className="col-lg-4 col-md-4 col-sm-12 widget footer-widget mb-4">
                            <h4 className="footer-widget-title" style={{ color: '#fff', marginBottom: '20px' }}>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link href="/" className="text-decoration-none text-muted hover-white">Home</Link></li>
                                <li className="mb-2"><Link href="/about" className="text-decoration-none text-muted hover-white">About Us</Link></li>
                                <li className="mb-2"><Link href="/events" className="text-decoration-none text-muted hover-white">Events</Link></li>
                                <li className="mb-2"><Link href="/login" className="text-decoration-none text-muted hover-white">Login</Link></li>
                            </ul>
                        </div>

                        {/* Contact/Social Widget */}
                        <div className="col-lg-4 col-md-4 col-sm-12 widget footer-widget mb-4">
                            <h4 className="footer-widget-title" style={{ color: '#fff', marginBottom: '20px' }}>Contact</h4>
                            <p>
                                <strong className="text-white">Email:</strong> secretary@lodge141.com<br />
                                <strong className="text-white">Address:</strong> 16220 Livingston Rd, Accokeek, MD 20607
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer Bottom */}
            <footer className="site-footer-bottom" style={{ backgroundColor: '#111', padding: '20px 0', borderTop: '1px solid #333' }}>
                <div className="container">
                    <div className="row">
                        <div className="copyrights-col-left col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
                            <p className="mb-0" style={{ fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} E. Jerry Williams Lodge No. 141. All Rights Reserved.</p>
                        </div>
                        <div className="copyrights-col-right col-lg-6 col-md-6 col-sm-12 text-center text-md-end">
                            {/* Social Icons Placeholder */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
