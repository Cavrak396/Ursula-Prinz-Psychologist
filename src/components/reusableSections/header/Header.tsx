import Logo from "../../reusable/logo/Logo";
import Navigation from "../navigation/Navigation";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="header__line">
          <Logo className="header__logo" alt="logo" />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
