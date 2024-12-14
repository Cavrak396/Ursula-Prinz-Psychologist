import Button from "../reusable/button/Button";
import Logo from "../reusable/logo/Logo";
import "./header.css";
import HeaderNavigation from "./HeaderNavigation";

function Header() {
    return (
        <div className="header">
            <div className="wrap">
                <div className="header__line">
                    <Logo uniqueClass="header__logo" />
                    <HeaderNavigation />
                    <Button uniqueClass="header__button" type="button"> Search Programs </Button>
                </div>
            </div>
        </div>
    )
}

export default Header;