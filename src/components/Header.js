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
    <nav className="flex justify-center items-center">
      <Link to="/">
        <h1 className="items-center cursive text-5xl md:text-6xl">
          Briti's Kitties
        </h1>
      </Link>
      <button
        className="navbarButton fixed bg-transparent outline-none pr-6 pl-6 z-20 md:mr-4 lg:hidden"
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
      <ul className="sm: hidden lg:flex lg:fixed lg:right-0">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} onClick={() => closeMenu()} exact>
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
