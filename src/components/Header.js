import Button from './Button';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Header = ({ navbarOpen, toggle, closeMenu }) => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/blog',
      text: 'Blog',
    },
    {
      id: 3,
      path: '/donate',
      text: 'Donate',
    },
    {
      id: 4,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <nav className="navBar">
      <Link to="/">
        <Button text="Briti's Kitties" />
      </Link>
      <button className="navbarButton" onClick={toggle}>
        {navbarOpen ? (
          <MdClose
            style={{ color: 'black', width: '1.8rem', height: '1.8rem' }}
          />
        ) : (
          <FiMenu
            style={{ color: 'black', width: '1.8rem', height: '1.8rem' }}
          />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
