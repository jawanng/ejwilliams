'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Session } from 'next-auth';

// Props passed from server component (Layout)
interface HeaderProps {
    session: Session | null;
    handleSignOut: () => Promise<void>;
}

export default function Header({ session, handleSignOut }: HeaderProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="site-header">
            {/* Topbar matching template structure */}
            <div className="topbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <h1 className="logo" style={{ margin: 0, padding: 0, border: 'none', background: 'transparent' }}>
                                <Link href="/" className="text-decoration-none" style={{ textDecoration: 'none', border: 'none', background: 'transparent' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', display: 'inline-block' }}>
                                        E. Jerry Williams Lodge No. 141
                                    </span>
                                </Link>
                            </h1>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-4">
                            <ul className="top-navigation hidden-sm hidden-xs padding-t0 d-none d-md-block text-end">
                                <li><Link href="/join">Join Us</Link></li>
                                <li><Link href="/events">Calendar</Link></li>
                                <li><Link href="/donate">Donate</Link></li>
                            </ul>
                            <button
                                className="d-block d-md-none menu-toggle btn btn-link ms-auto"
                                onClick={toggleMenu}
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i> Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Menu Wrapper */}
            <div className="main-menu-wrapper" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className={`navigation ${isMenuOpen ? 'd-block' : 'd-none d-md-block'}`}>
                                <ul className="sf-menu nav list-unstyled d-flex flex-column flex-md-row">
                                    <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                                        <Link href="/" className="nav-link text-white">Home</Link>
                                    </li>
                                    <li className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
                                        <Link href="/about" className="nav-link text-white">About Us</Link>
                                    </li>
                                    <li className={`nav-item ${pathname === '/events' ? 'active' : ''}`}>
                                        <Link href="/events" className="nav-link text-white">Events</Link>
                                    </li>

                                    {/* Auth Links */}
                                    {session?.user?.role === 'ADMIN' && (
                                        <li className="nav-item">
                                            <Link href="/admin" className="nav-link" style={{ color: 'var(--color-secondary)' }}>
                                                <strong>Admin Dashboard</strong>
                                            </Link>
                                        </li>
                                    )}

                                    {session ? (
                                        <li className="nav-item ms-md-auto">
                                            <form action={handleSignOut} className="d-inline">
                                                <button type="submit" className="btn btn-link nav-link text-white" style={{ textDecoration: 'none' }}>
                                                    Logout
                                                </button>
                                            </form>
                                        </li>
                                    ) : (
                                        <li className="nav-item ms-md-auto">
                                            <Link href="/login" className="nav-link text-white">Member Login</Link>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
