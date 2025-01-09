import { navigationLinks } from "../navigation/utils/navigationUtils";
import FooterNavigationItem from "./FooterNavigationItem";

function FooterNavigationList() {
  return (
    <ul className="footer__navigation-list">
      {navigationLinks.map((link) => {
        return <FooterNavigationItem key={link.id} link={link} />;
      })}
    </ul>
  );
}

export default FooterNavigationList;
