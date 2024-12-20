import { LinkType } from "../navigation/navigationTypes";

function FooterNavigationItem({ link }: LinkType) {
  return (
    <li className="footer__navigation-item">
      <a href="#" className="footer__navigation-link">
        {link.name}
      </a>
    </li>
  );
}

export default FooterNavigationItem;
