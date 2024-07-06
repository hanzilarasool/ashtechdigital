import  { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navlogo from "../../assets/fav.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
     <Link to="/" className='logo-url'>
     
     <div className="navbar-logo logo-container">
      <img src={navlogo} alt="nav-logo"  />
      <h1 className="nav-logo-txt">
        ASHTech Digital <br />
        <span>--Solutions--</span>
      </h1>
    </div>
     </Link>
     
     
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
    <Link to="/" className='nav-links' onClick={toggleNavbar}>Home</Link>
          </li>
          <li className="nav-item">
           <Link to="/services" className='nav-links' onClick={toggleNavbar}>Services</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className='nav-links' onClick={toggleNavbar}>About</Link>
          </li>
          <li className="nav-item">
          <Link to="/contact" className='nav-links' onClick={toggleNavbar}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
