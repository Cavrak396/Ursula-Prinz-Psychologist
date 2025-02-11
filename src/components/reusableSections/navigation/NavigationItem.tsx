import { useNavigation } from "../../context/NavigationContext";
import { NavigationItemProps } from "./types/navigationTypes";

function NavigationItem({ item, setIsActiveMenu }: NavigationItemProps) {
  const { setActiveLink, activeLink } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(item.link, item.id.toString());
    setIsActiveMenu(false);
  };

  return (
    <li className="navigation__list-item">
      <a
        onClick={handleClick}
        href="#"
        className={`navigation__list-link ${
          activeLink === item.id.toString() ? "active-link" : ""
        }`}
      >
        {item.link}
      </a>
    </li>
  );
}

export default NavigationItem;