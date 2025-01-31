import { useNavigate } from "react-router-dom";
import { NavigationItemProps } from "./types/navigationTypes";

function NavigationItem({ link, isActive, setIsActive }: NavigationItemProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive(link.id);
    
    // Navigate to the route corresponding to the link
    if (link.name === "Über mich") {
      navigate("/about");
    } else {
      navigate("/"); // Default navigation to home
    }
  };

  return (
    <li className="navigation__list-item">
      <a
        onClick={handleClick}
        href="#"
        className={`navigation__list-link ${isActive === link.id ? "active-link" : ""}`}
      >
        {link.name}
      </a>
    </li>
  );
}

export default NavigationItem;
