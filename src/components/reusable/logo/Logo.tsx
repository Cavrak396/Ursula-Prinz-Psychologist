import LogoImage from "../../../assets/images/header/logo.png";
import { LogoType } from "./logoTypes";

function Logo({ className, alt }: LogoType) {
  return <img src={LogoImage} className={`${className} logo`} alt={alt} />;
}

export default Logo;
