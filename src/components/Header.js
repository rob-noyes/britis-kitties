import Button from './Button';
import { Link, NavLink } from 'react-router-dom';
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
        <button className="flex items-center ml-3 ">Briti's Kitties</button>
      </Link>
      <button
        className="navbarButton bg-transparent pr-6 pl-6 z-20"
        onClick={toggle}
      >
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
      <ul className={`z-10 menuNav ${navbarOpen ? ' showMenu' : ''}`}>
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
