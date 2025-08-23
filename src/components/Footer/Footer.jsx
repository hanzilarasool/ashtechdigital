// import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import your CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer-logo">
                        <h2>ASH Tech</h2>
                        <p>Digital Solutions</p>
                    </div>
                <div className="footer-content">
                 <div className='side2'>
                 
                    <div className="footer-links">
                        <ul className='footer-links-list'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    {/* services urls */}
                    <div className="footer-links">
                        <ul className='footer-links-list'>
                            <li><Link to="/services/1">AI/ML Solutions</Link></li>
                            <li><Link to="/services/2">Web & App Development</Link></li>
                            <li><Link to="/services/3">UI/UX Design</Link></li>
                            <li><Link to="/services/4">Career Counseling & Training</Link></li>
                        </ul>
                    </div>
{/* end .here */}
                    <div className="footer-social">
                        <ul className='social-links-list'>
                            <li className='social-link'><Link to="https://www.linkedin.com/company/ashtech-digital-solutions/" > <img src="./Footer/linkedin.svg" alt="" /></Link></li>
                            <li className='social-link'><Link to="https://github.com/ashtechdigitalsolutions" > <img src="./Footer/git.svg" alt="" /></Link></li>
                            <li className='social-link'><Link to="https://www.facebook.com/share/1BK9XTFTp3/?mibextid=wwXIfr" > <img src="./Footer/fb.svg" alt="" /></Link></li>
                            <li className='social-link'><Link to="https://www.instagram.com/ashtechdigitalsolutions?igsh=MXdzeDdkM3YxYWNndQ%3D%3D&utm_source=qr" > <img src="./Footer/ig.svg" alt="" /></Link></li>
                        </ul>
                    </div>
                 </div>
                </div>
               
            </div>

                 {/* Sub-footer for copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ASH Tech Digital Solutions. All rights reserved. Developed by <Link to="https://www.linkedin.com/company/ashtech-digital-solutions/" className='developer-link' style={{textDecoration:"underline"}}> ASH Tech </Link> </p>
                </div>
        </footer>
    );
}

export default Footer;
