import React, { useState, useEffect } from 'react'

const about = () => {

    const [mrName, setMrName] = useState('Mr. [.]');
    const [news, setNews] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const callingNews = async () => {
            console.log('calling');
        };
        callingNews();
    }, []);

    return <React.Fragment>
        <div className="w3-container w3-padding-32" id="aboutus">
            <br />
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About us</h3>
            <div className='bg-light card p-2 mt-2'>
            <div className='h4'><h4><b>Our purpose</b></h4></div>
                <p className=''>We are a strongly purpose-driven team of legal advisors and professionals investing with their legal advisory, technical knowledge, deep insights and 
                    industry exposure into Start-ups and Growth stage companies, with one purpose to capture lucrative new businesses for our valued clients, knowing that every mile on their
                    journey comes with dedication and commitments.
                    <br />
                    <br />
                    With a laser focus approach, we act as legal and advisory consultant for seed and growth stage companies that are ready to step on the accelerator, as they've reached as inflection point through demonstrated product-market fit,
                    rapid organic growth and customer focus.
                    <br/>
                    <br/>
                    We aim to be a true extension of your business - our legal research, industry knowledge, innovation and resourceful team works in concert with deliver new avenues for expansion and impact.
                </p>
            </div>
            <div className='bg-light card p-2 mt-2'>
                <div className='h4'><h4><b>A tried and tested strategy</b></h4></div>
                <p>
                    A successful strategic consulting is like a muscle. You strengthen it through intentional and regular repitition. Exercising our advice and strategies time and again has led helping the entrepreneurs navigate and capitalize on transformational growth.
                </p>
            </div>
            <div className='bg-light card p-2 mt-2'>
                <div className='h4'><h4><b>A team you can rely on</b></h4></div>
                <p>
                    Scaling a business takes vision, skill,  persistence and deeply-held confidence in the direction you're heading. We're right there with you! Our people has a real mix of skill sets and experience as consultants, regulatory experts, lawyers and industry veterans
                    which are approachable and tenacious, collaborative and bold. Meet the team that digs deep to help drive your business forward.
                </p>
            </div>
            <div className='bg-light card p-2 mt-2'>
                <div className='h4'><h4><b>Our growth engine</b></h4></div>
                <p>
                    We're passionate about supporting seed and grow stage entities in their quest to reach the top of their fields. At the core is our management team, leading the charge and ececuting legal strategy and advisory services. Our experts identify challenges and offer most economical sulutions that are robust andeffective in implementing, making contributions to the profitability of your entity.
                    Innovation, diversity of thoughts and out of box thinking is key for our operations as it comes to see around corners and offer best tailored solutions and resources to our clients world wide. 
                </p>
            </div>
            <div className='bg-light card p-2 mt-2'>
                <div className='h4'><h4><b>Global Management Team</b></h4></div>
                <p>
                    Our Team is lead by {mrName} a seasoned investment banker turned legal attorney, having more than decade of experience in providing global corporate
                    consultancy and advisory services in a cross-border jurisdiction. Since 2008, {mrName} has been actively engaged in rendering services 
                    to small and mid-scale entities on diverse advisory matters ranging from company formation, merging & acquisitions, investment banking, 
                    corporate finance, commercial contracts, asset & wealth management, Start-ups, private equity, corporate restructuring, due diligence, Data Protection, Human Resourse and Outsourcing.
                    In the past he remained asssociate with a leading corporate law firm possessing deep expertise and market experience in the field of corporate 
                    advisory and legal research. During his career. {mrName} has remained part of several global consulting projects with a focus on legal and regulatory
                    issues, company incorporation, governance, investments, transformation, strategic management, re-structuring, mergers and takeovers,
                    outsourcing and technology.
                    <br/>
                    <br/>
                    {mrName} has more than five years of experience in providing legal consultancy and litigation services to some of the top international 
                    brands in the consumer and manufacturing sector. He provides a unique combination of organisational strategy, governance and challengesmanagement.
                    Committed to the success of our clients, he has been regularly engaged in advising and rendering legal opinion on vast international lawyers
                    practices to individuals and corporate clients in successfully resolving potential legal challenges in a cost-effectiveway. His area of expertise 
                    includes conflick management, dispute resolution, governance, regulatory issues, re-structuring, commercial contracts, mediation and arbitration.
                </p>
            </div>
            <div className='bg-light card p-2 mt-2'>
                <div className='h4'><h4><b>Industries we serve</b></h4></div>
                <p>
                    We have a strong industry and business focus and have mapped and studied several sectors such as Corporate Technology,
                    Finance banking, Energy, Telecom and other manufacturing sectors over years. We integrate this knowledge with our 
                    expertise in providing corporate and regulatory advisory services. Some of the industries we have been serving are 
                    Capital Markets, Corporate Finance, Crypto and Block Chain Technology, Education, Human Resources, Communications, 
                    Energy, Pharmaceutical, Environmental, Engineering, Media & Entertainment, Health & Social Care.
                    <br/>
                    <br/>
                    The attorneys in our team are experienced in virtually all aspects of corporate compliance, counselling and
                    understand cost-challenges by working alongside enterpreneurs, innovators and leaders to effectively resolve
                    complex challenges including: 
                </p>
                <ol>
                    <li>• Designing and implementing complaince programs within the business</li>
                    <li>• Third party contract negotiation</li>
                    <li>• Conducting internal investigations</li>
                    <li>• Drafting comprehensive policies, supporting procedures and training materials</li>
                    <li>• Delivering virtual customized trainings to management and employees on diverse legal matters and laws</li>
                    <li>• Making reports for the executive leaders and boards</li>
                </ol>
            </div>
            <div className='bg-light card p-2 mt-2'>
                <div className='h4'><h4><b>Our Services</b></h4></div>
                <p>
                    Company Incorporation, SPV formation, Consultancy, Commercial Contracts Drafting & Vetting, Start-ups, Joint Ventures, 
                    Merger & Acquisitions, Spin-offs, Private Equity, Family Offices, Technology Laws, Licensing, Corporate & Deal Advisory,
                    Research, Corporate Governance, Duw Diligence, Competition Laws, Fund Formation, Risk & Compliance. 
                </p>
            </div>
            <div className='bg-light card p-2 mt-2'>
                <div className='h4'><h4><b>News & Media</b></h4></div>
                
            </div>
            <div className='bg-light card p-2 mt-2'>
                <div className='h4'><h4><b>Legal Research</b></h4></div>
                
            </div>
        </div>

        <div className="w3-row-padding w3-grayscale">
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img src="/images/team2.jpg" alt="John" styles="width:100%" />
                <h3>John Doe</h3>
                <p className="w3-opacity">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img src="/images/team1.jpg" alt="Jane" styles="width:100%" />
                <h3>Jane Doe</h3>
                <p className="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img src="/images/team3.jpg" alt="Mike" styles="width:100%" />
                <h3>Mike Ross</h3>
                <p className="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
                <img src="/images/team4.jpg" alt="Dan" styles="width:100%" />
                <h3>Dan Star</h3>
                <p className="w3-opacity">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
        </div>
    </React.Fragment>;
}

export default about;