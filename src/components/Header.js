import Button from './Button';

const Header = () => {
  return (
    <nav>
      <button>Briti's Kitties</button>
      <ul>
        <Button text="Home" />
        <Button text="Blog" />
        <Button text="About" />
      </ul>
    </nav>
  );
};

export default Header;
