
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className='navbar'>
      <h2 >
      <Link className='title' to='/'>Rick & Morty Hub</Link>
      </h2>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to='/characters'>Characters</NavLink>
        </li>
        <li>
          <NavLink to='/episodes'>Episodes</NavLink>
        </li>
        <li>
          <NavLink to='/locations'>Locations</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
