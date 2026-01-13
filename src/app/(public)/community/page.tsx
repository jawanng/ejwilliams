import { prisma } from '@/lib/prisma';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function CommunityPage() {
    const works = await prisma.communityWork.findMany({
        orderBy: { date: 'desc' },
    });

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="heading-large text-primary mb-3">Community & Outreach</h1>
                <p className="text-large max-w-2xl mx-auto">
                    We are dedicated to serving our community. Here are some of the ways we are making a difference.
                </p>
            </div>

            <div className="row g-4">
                {works.map((work) => (
                    <div key={work.id} className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-img-top position-relative" style={{ height: '240px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                                {work.imageData ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={`/api/images/community/${work.id}`}
                                        alt={work.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                                        <i className="fas fa-image fa-3x"></i>
                                    </div>
                                )}
                            </div>
                            <div className="card-body">
                                <h3 className="card-title h4 mb-3">{work.title}</h3>
                                <p className="card-text text-muted">{work.description}</p>
                                <div className="text-sm text-secondary mt-3">
                                    <i className="far fa-calendar-alt me-2"></i>
                                    {new Date(work.date).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {works.length === 0 && (
                    <div className="col-12 text-center py-5">
                        <p className="text-muted text-large">Coming soon! Check back later for our community updates.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
