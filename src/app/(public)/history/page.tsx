/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';

export default function HistoryPage() {
    return (
        <>
            {/* Page Header */}
            <div className="page-header" style={{
                backgroundImage: 'url(https://placehold.co/1280x300/00205B/C5B358?text=History+%26+Legacy)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '80px 0',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-uppercase" style={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>History & Legacy</h1>
                            <ul className="breadcrumb bg-transparent justify-content-center p-0 m-0">
                                <li className="breadcrumb-item"><Link href="/" className="text-white text-decoration-none">Home</Link></li>
                                <li className="breadcrumb-item"><Link href="/about" className="text-white text-decoration-none">About Us</Link></li>
                                <li className="breadcrumb-item active text-white" aria-current="page">History</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main" role="main">
                <div id="content" className="content full py-5">
                    <div className="container">

                        {/* E. Jerry Williams Section */}
                        <div className="row mb-5">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="card border-0 shadow-sm">
                                    <img
                                        src="/images/ejw-portrait.png"
                                        alt="E. Jerry Williams"
                                        className="card-img-top"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/400x500/00205B/C5B358?text=E.+Jerry+Williams";
                                        }}
                                    />
                                    <div className="card-body bg-light">
                                        <h5 className="card-title text-center text-primary">E. Jerry Williams</h5>
                                        <p className="card-text text-center text-muted small">The Man Behind the Name</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h2 className="text-primary mb-4">E. Jerry Williams: The Man</h2>
                                <div className="p-4 bg-light rounded border-start border-4 border-warning">
                                    <h4 className="text-secondary mt-3">The Early Years</h4>
                                    <p>
                                        E. Jerry Williams was born in Pocomoke City, Maryland to Laura J. Williams and the Reverend Elijah J. Williams, a Baptist minister. His early
                                        education began in the public schools of Worcester County, Maryland. Soon after the death of his father, the family moved to Baltimore, where
                                        E. Jerry Williams was enrolled in the Baltimore County public school system. His early education also included piano lessons that eventually
                                        enabled him to become an accomplished musician. During those early years, E. Jerry joined People&apos;s Church and later served as Superintendent
                                        of the Sunday school Department. He graduated from Douglas High School and went on to pursue higher education at Morgan State College
                                        (now Morgan State University) where he earned the Bachelor of Arts degree in 1930.
                                    </p>

                                    <h4 className="text-secondary mt-4">The Middle Years</h4>
                                    <p>
                                        A new chapter began in the life of E. Jerry Williams when he returned to the Eastern Shore. He moved to the town of Berlin, Maryland to become
                                        Principal of Flower Street High School. This was the beginning of a mutual admiration between E. Jerry and the residents of Berlin that would
                                        last for two decades. He was very active in the community and served with the Masons, the Odd Fellows, the NAACP, and various educational
                                        organizations. He continued his education earning a Master of Science degree from the University of Pennsylvania. He also began to spread his
                                        musical talents on piano, organ and choral techniques throughout the community and on occasion, he even chimed in with his own rich and
                                        melodious bass voice.
                                    </p>
                                    <p>
                                        E. Jerry was very interested in the education and development of young people. The fact that he himself came from a poor family, enabled him to
                                        understand the plight of youngsters who could not attend school because of a lack of clothing or other necessities. Therefore, he intervened to
                                        provide assistance whenever possible. E. Jerry Williams, who worked his way through school, realized the value and importance of an education.
                                        Consequently, he shrived to educate and prepare his students for the future while at the same time introducing them to the arts of music, poetry,
                                        and drama.
                                    </p>
                                    <p>
                                        His stay in Berlin came to an end in the early 1950&apos;s when he moved to Princess Anne, Maryland to become Principal of Greenwood High School.
                                        In Princess Anne, he became active in the leadership of the Somerset County Educational Association. He fought a continuing battle for better
                                        educational facilities for teachers and students. The final stop in his educational career was Lexington Park, Maryland where he became principal
                                        of George Washington Carver High School. It was a time when the integration of schools was just beginning to take place in St. Mary&apos;s County.
                                        E. Jerry&apos;s involvement with the Saint Mary&apos;s County Educational Association and a special task force assisted in providing a smooth integration
                                        process and the development of mutual understandings between teachers and students of different races.
                                    </p>

                                    <h4 className="text-secondary mt-4">The Later Years</h4>
                                    <p>
                                        After a long and illustrious career during which he inspired many teachers and pupils, E. Jerry Williams retired from the school system in July 1969.
                                        After a brief period, he returned to Baltimore, the city of his childhood. Through the many years, he maintained his activities with the Masons,
                                        Shriners, and other fraternal organizations in the state of Maryland. He also returned to the church of his childhood, which had now become
                                        Memorial Baptist church.
                                    </p>
                                    <p>
                                        The final chapter in the life of E. Jerry Williams began when he decided to enter the ministry. It is believed that he had always dreamed of following
                                        in his father&apos;s footsteps. That dream came true when, after various preparations, he was ordained into the Baptist Ministry in the early 1970&apos;s.
                                        Even at this late stage in his life, he continued his pursuit for higher education, and earned the Doctor of Divinity Degree from Baltimore College of Bible.
                                        He eventually became Assistant Pastor at Memorial Baptist Church. He remained in that position until his death on August 24, 1979. E. Jerry Williams
                                        had one daughter, Barbara, and three sons, E. Jerry Williams, Jr., Willis, and Billy.
                                    </p>

                                    <h4 className="text-secondary mt-4">The Legacy</h4>
                                    <p>During his eventful life, he belonged to the following organizations:</p>

                                    <h5 className="mt-4 mb-3">Educational Affiliations</h5>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Member, National Association of Secondary School Principals</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Member, Maryland Association of Secondary School Principals</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Member, Maryland Society of Educational Pioneers</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>First Vice President Maryland Educational Association</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>President of Worcester, Somerset, and St. Mary&apos;s County Educational Associations</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Member, Maryland State Teacher&apos;s Association</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Member, National Educator&apos;s Association</li>
                                    </ul>

                                    <h5 className="mt-4 mb-3">Fraternal Affiliations</h5>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-star text-warning me-2"></i>United Supreme Council, Thirty-Third Degree Masons, PHA</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Past Master, Booker T, Washington Lodge #87 - Berlin, MD</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Past Master, Mount Olive Lodge #25 - Baltimore, MD</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>A Founder and First CIC, King David Consistory #284 - Salisbury, MD</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Associate Grand Chaplain, Most Worshipful Prince Hall Grand Lodge F&AM, PHA</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Past Grand Junior Warden, Most Worshipful Prince Hall Grand Lodge F&AM PHA</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Vice President, BD of Trustees, Most Worshipful Prince Hall Grand Lodge F&AM, PHA</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Director of the Scholarship Commission, MWPHGL of Maryland F&AM, PHA</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Member, Keystone Chapter #10, Royal Arch Masons</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Member, St. Joseph Commandery of Knights Templar</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Past Potentate, Jerusalem Temple #4, Nobles of the Mystic Shrine</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Past Imperial Potentate, Imperial Council of the Nobles of the Mystic Shrine</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Past Grand Patron, Myra Grand Chapter, Order of the Eastern Star</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Past Worthy Joshua, Rosa J. Richardson Court, Heroines of Jericho</li>
                                        <li><i className="fas fa-star text-warning me-2"></i>Phi Beta Sigma Fraternity</li>
                                    </ul>

                                    <h5 className="mt-4 mb-3">Religious Affiliations</h5>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-cross text-secondary me-2"></i>Assistant Pastor, Memorial Baptist Church - Baltimore, MD</li>
                                        <li><i className="fas fa-cross text-secondary me-2"></i>Recording Secretary, United Baptist Missionary Convention of Maryland</li>
                                        <li><i className="fas fa-cross text-secondary me-2"></i>Corresponding Secretary, Baptist Minister&apos;s Conference of Baltimore, MD and Vicinity</li>
                                        <li><i className="fas fa-cross text-secondary me-2"></i>Member, Advisory Board of the Baltimore Baptist Clergy in Action</li>
                                        <li><i className="fas fa-cross text-secondary me-2"></i>Secretary, The Interdenominational Ministerial Alliance of Maryland</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr className="my-5" />

                        {/* Past Masters Section */}
                        <div className="row mb-5">
                            <div className="col-12 text-center mb-5">
                                <h2 className="text-primary">Past Masters</h2>
                                <p className="lead text-muted">Honoring those who have served in the East.</p>
                            </div>
                            <div className="col-12">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body bg-light">
                                        <div className="row g-3">
                                            {[
                                                { year: "2023-2024", name: "Lewis Woodard III" },
                                                { year: "2022-2023", name: "Walter Armstrong" },
                                                { year: "2021-2022", name: "Claymon Strong" },
                                                { year: "2020-2021", name: "Rashaun Gregory" },
                                                { year: "2019-2020", name: "Rashaun Gregory" },
                                                { year: "2018-2019", name: "Calvin Whitfield" },
                                                { year: "2017-2018", name: "Eric Jones" },
                                                { year: "2016-2017", name: "Dwayne Martin" },
                                                { year: "2016", name: "Claud Williams" },
                                                { year: "2016", name: "Thomas Mays" },
                                                { year: "2015-2016", name: "Marcus Johnson" },
                                                { year: "2014-2015", name: "Kevin McDonald" },
                                                { year: "2014", name: "Rochester Bunn *" },
                                                { year: "2013-2014", name: "Warren R. Jones" },
                                                { year: "2012-2013", name: "Ron'Nel N. Owens" },
                                                { year: "2011-2012", name: "Stephen B. Bush" },
                                                { year: "2010-2011", name: "Antonio L. Abney, Jr *" },
                                                { year: "2009-2010", name: "Matthew M. Jones" },
                                                { year: "2010", name: "Edwin L. Scott *" },
                                                { year: "2008-2009", name: "Jawann L. Graves" },
                                                { year: "2007-2008", name: "Carlos E. Tingle" },
                                                { year: "2006-2007", name: "Alvin J. Pinkney" },
                                                { year: "2006", name: "Austin C. Dickerson" },
                                                { year: "2005-2006", name: "Antonio C. Sturgis" },
                                                { year: "2005", name: "Raymond E. Riley, Sr. *" },
                                                { year: "2004-2005", name: "Michael E. Stephens" },
                                                { year: "2003-2004", name: "Henry L. Foy *" },
                                                { year: "2002-2003", name: "James T. Isley" },
                                                { year: "2001-2002", name: "Herman Suggs II" },
                                                { year: "2000-2001", name: "Warren L. Broomer" },
                                                { year: "1999-2000", name: "John T. Blakeney" },
                                                { year: "1998-1999", name: "Richard \"Sonny\" Hill" },
                                                { year: "1997-1998", name: "Steven G. Collier" },
                                                { year: "1996-1997", name: "James Graham, Jr." },
                                                { year: "1995-1996", name: "J. LeShayne Hoffman" },
                                                { year: "1994-1995", name: "Alfred A. Bosman II *" },
                                                { year: "1993-1994", name: "Daryl J. Collins" },
                                                { year: "1992-1993", name: "Alfred E. Smith, Sr." },
                                                { year: "1992", name: "Roy A. Maggett *" },
                                                { year: "1992", name: "Edward Brown (Trestle Board #176)" },
                                                { year: "1991-1992", name: "Clarence E. McIntosh" },
                                                { year: "1990-1991", name: "Joshua P. Roberson" },
                                                { year: "1990-1991", name: "Douglas A. Taylor (Ernest W. Lyons #107) *" },
                                                { year: "1989-1990", name: "Albert J. Truesdale" },
                                                { year: "1988-1989", name: "Dimitri M. Brown *" },
                                                { year: "1987-1988", name: "MWPGM Robert J. Poindexter *" },
                                                { year: "1986-1987", name: "Richard \"Sonny\" Hill" },
                                                { year: "1985-1986", name: "Warren L. Broomer" },
                                                { year: "1982", name: "Allan A. Evans (E. W. Armstrong #140)" },
                                                { year: "1976", name: "Leroy A. Lassiter (Nero Prince Hall #126) *" },
                                                { year: "1976-1979", name: "Ronald Dickens (Donald E. Jones #121)" }
                                            ].map((pm, index) => (
                                                <div key={index} className="col-md-6 col-lg-4">
                                                    <div className="bg-white p-3 rounded shadow-sm h-100 d-flex justify-content-between align-items-center border border-1">
                                                        <span className="fw-bold text-primary">{pm.year}</span>
                                                        <span className="text-end text-muted small ms-2">{pm.name}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* In Memoriam Section */}
                        <div className="row mb-5">
                            <div className="col-12 text-center mb-5">
                                <h2 className="text-primary">In Memoriam</h2>
                                <p className="lead text-muted">Remembering our beloved brethren who have passed to the Celestial Lodge.</p>
                            </div>
                            <div className="col-md-10 offset-md-1">
                                <div className="row g-4">
                                    {[
                                        { name: "Past Master Antonio Abney Sr. (Honorary Member)", date: "November 2024" },
                                        { name: "Past Master Rochester Bunn", date: "February 2024" },
                                        { name: "Most Worshipful Past Grand Master Leroy A. Lassiter", date: "October 2022" },
                                        { name: "Right Worshipful Antonio Abney Jr.", date: "May 2021" },
                                        { name: "Past Master Edwin Scott", date: "February 2021" },
                                        { name: "Right Worshipful Dimitri M. Brown", date: "November 2018" },
                                        { name: "Most Worshipful Past Grand Master Shelton D. Redden (Charter Member)", date: "February 21, 2015" },
                                        { name: "Right Worshipful Douglas A. Taylor", date: "January 2015" },
                                        { name: "Past Master Henry Foy", date: "January 2013" },
                                        { name: "Brother Benjamin Bowlding", date: "October 2012" },
                                        { name: "Most Worshipful Past Grand Master Robert J. Poindexter", date: "November 2011" },
                                        { name: "Brother Leconyia Jessie", date: "May 2011" },
                                        { name: "Brother Charles Herbert Flowers II", date: "January 2011" },
                                        { name: "Past Master Raymond E. Riley", date: "September 2005" },
                                        { name: "Past Master Roy A. Maggett", date: "August 2005" },
                                        { name: "Brother Isaac Gourdine", date: "March 2002" },
                                        { name: "Brother Michael G. Baker", date: "November 2000" },
                                        { name: "DDGM 4th Masonic District, RW Walter Williams Brown", date: "April 1999" },
                                        { name: "Brother Eddie P. Luckett", date: "January 1998" },
                                        { name: "Brother Vernon H. McCaster", date: "May 1997" }
                                    ].map((brother, index) => (
                                        <div key={index} className="col-md-6">
                                            <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm h-100 border-start border-4 border-dark">
                                                <i className="fas fa-star text-secondary me-3 fa-lg"></i>
                                                <div>
                                                    <h6 className="mb-0 fw-bold">{brother.name}</h6>
                                                    <small className="text-muted">{brother.date}</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-5">
                                    <p className="fst-italic text-muted">
                                        &quot;Although you are now at rest from your labors, the work that you have performed as members of the Lodge continues on.
                                        We at this time would like to thank the Great Architect of the Universe for allowing you to share a part of your lives with us.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
