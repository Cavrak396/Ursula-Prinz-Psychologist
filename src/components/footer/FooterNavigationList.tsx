import { navigationLinks } from "../navigation/navigationUtils";
import FooterNavigationItem from "./FooterNavigationItem";

function FooterNavigationList() {
  return (
    <ul className="footer__navigation-list">
      {navigationLinks.map((link) => {
        return <FooterNavigationItem link={link} />;
      })}
    </ul>
  );
}

export default FooterNavigationList;
