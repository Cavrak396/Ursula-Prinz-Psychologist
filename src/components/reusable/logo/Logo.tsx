import { useNavigate } from "react-router-dom";
import { useNavigation } from "../../context/NavigationContext";
import LogoImage from "../../../assets/images/header/logo.png";
import { LogoType } from "./logoTypes";
import "./logo.css"

function Logo({ className, alt, redirectTo = "/" }: LogoType) {
  const navigate = useNavigate();
  const { setActiveLink } = useNavigation();

  const handleClick = () => {
    setActiveLink("Home", "1");
    navigate(redirectTo);
  };

  return (
    <img
      src={LogoImage}
      className={`${className} logo`}
      alt={alt}
      onClick={handleClick}
    />
  );
}

export default Logo;
