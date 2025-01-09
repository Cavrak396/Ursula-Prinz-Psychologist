import Logo from "../reusable/logo/Logo";
import "./header.css";
import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="header__line">
          <Logo className="header__logo" />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
