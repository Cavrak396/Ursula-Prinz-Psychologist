import { useNavigation } from "../../../context/NavigationContext";
import { NavigationItemProps } from "../../navigation/types/navigationTypes";

function FooterNavigationLink({ item }: NavigationItemProps) {
  const { setActiveLink } = useNavigation();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(item.link, item.id.toString());
  };

  return (
    <li className="footer__navigation-item">
      <a onClick={handleClick} className="footer__navigation-link" href="#">
        {item.link}
      </a>
    </li>
  );
}

export default FooterNavigationLink;
