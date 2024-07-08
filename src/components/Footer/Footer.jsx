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
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    {/* services urls */}
                    <div className="footer-links">
                        <ul className='footer-links-list'>
                            <li><Link to="/services/1">Web Development</Link></li>
                            <li><Link to="/services/2">Web Designing</Link></li>
                            <li><Link to="/services/3">Graphic Designing</Link></li>
                            <li><Link to="/services/4">Student Assistence</Link></li>
                            <li><Link to="/services/5">Marketing</Link></li>
                        </ul>
                    </div>
{/* end .here */}
                    <div className="footer-social">
                        <ul className='social-links-list'>
                            <li className='social-link'><Link to="https://www.linkedin.com/in/mohammadhanzilarasool/" > <img src="./Footer/linkedin.svg" alt="" /></Link></li>
                            <li className='social-link'><Link to="https://github.com/hanzilarasool" > <img src="./Footer/git.svg" alt="" /></Link></li>
                            <li className='social-link'><Link to="https://web.facebook.com/muhammadhanzilarasool/" > <img src="./Footer/fb.svg" alt="" /></Link></li>
                            <li className='social-link'><Link to="/" > <img src="./Footer/x.svg" alt="" /></Link></li>
                        </ul>
                    </div>
                 </div>
                </div>
               
            </div>
            <div className="footer-bottom">
                    <p>&copy; 2024 ASH Tech Digital Solutions. All rights reserved. Developed by <Link to="https://www.linkedin.com/in/mohammadhanzilarasool/" className='developer-link' > @hanzilarasool </Link> & Team</p>
                </div>
        </footer>
    );
}

export default Footer;
