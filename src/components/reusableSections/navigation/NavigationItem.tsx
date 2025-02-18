import { useNavigation } from "../../context/NavigationContext";
import { NavigationItemProps } from "./types/navigationTypes";

function NavigationItem({ item, setIsActiveMenu }: NavigationItemProps) {
  const { setActiveLink, activeLink } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(item.link, item.id.toString());
    if (setIsActiveMenu) {
      setIsActiveMenu(false);
    }
  };

  return (
    <li className="navigation__list-item" role="menuitem">
      <a
        onClick={handleClick}
        href="#"
        className={`navigation__list-link ${
          activeLink === item.id.toString() ? "active-link" : ""
        }`}
        aria-current={activeLink === item.id.toString() ? "page" : undefined}
      >
        {item.link}
      </a>
    </li>
  );
}

export default NavigationItem;
