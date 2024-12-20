import Logo from "../reusable/logo/Logo";
import "./header.css";
import HeaderNavigation from "./HeaderNavigation";

function Header() {
    return (
        <div className="header">
            <div className="wrap">
                <div className="header__line">
                    <Logo className="header__logo" />
                    <HeaderNavigation />
                </div>
            </div>
        </div>
    )
}

export default Header;