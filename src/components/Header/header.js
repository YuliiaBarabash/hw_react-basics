import "./header.css";
import naruto from '../../pics/naruto.gif';

const Header = () => {
  return (
    <header className="header">
      <p className="header-text">I have no time for cool design so here is Naruto for you!</p>
      <img src={naruto} className="naruto" alt="Naruto gives thumb up" />
    </header>
  );
};

export default Header;
