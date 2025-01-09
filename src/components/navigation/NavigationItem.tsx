import { NavigationItemProps } from "./types/navigationTypes";

function NavigationItem({ link, isActive, setIsActive }: NavigationItemProps) {
  return (
    <li className="navigation__list-item">
      <a
        onClick={(e) => {
          e.preventDefault();
          setIsActive(link.id);
        }}
        href="#"
        className={`navigation__list-link ${
          isActive === link.id ? "active-link" : ""
        }`}
      >
        {link.name}
      </a>
    </li>
  );
}

export default NavigationItem;