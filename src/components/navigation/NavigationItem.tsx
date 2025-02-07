import { useNavigate } from "react-router-dom";
import { NavigationItemProps } from "./types/navigationTypes";

function NavigationItem({ item, isActive, setIsActive }: NavigationItemProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive?.(item.id);

    if (item.link === "Über mich") {
      navigate("/about");
    } else if (item.link === "Process") {
      navigate("/process");
    } else {
      navigate("/");
    }
  };

  return (
    <li className="navigation__list-item">
      <a
        onClick={handleClick}
        href="#"
        className={`navigation__list-link ${
          isActive === item.id ? "active-link" : ""
        }`}
      >
        {item.link}
      </a>
    </li>
  );
}

export default NavigationItem;
