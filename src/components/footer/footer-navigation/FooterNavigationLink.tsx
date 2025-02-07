import { NavigationItemProps } from "../../navigation/types/navigationTypes";

function FooterNavigationLink({ item }: NavigationItemProps) {
  return (
    <li className="footer__navigation-item">
      <a className="footer__navigation-link" href="#">
        {item.link}
      </a>
    </li>
  );
}

export default FooterNavigationLink;
