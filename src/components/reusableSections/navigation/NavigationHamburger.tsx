import Button from "../../reusable/button/Button";
import Hamburger from "../../../assets/images/header/hamburger-menu.svg";
import { NavigationHamburgerProps } from "./types/navigationTypes";

function NavigationHamburger({ setIsActiveMenu }: NavigationHamburgerProps) {
  return (
    <Button
      type="button"
      className="navigation__hamburger-button"
      onClick={() => setIsActiveMenu((prev) => !prev)}
      aria-label="Toggle navigation menu"
    >
      <img
        src={Hamburger}
        className="navigation__hamburger"
        alt="hamburger menu"
      />
    </Button>
  );
}

export default NavigationHamburger;
