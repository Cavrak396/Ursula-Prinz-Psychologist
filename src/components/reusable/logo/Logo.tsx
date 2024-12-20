import LogoImage from "../../../assets/images/header/logo.png";
import { LogoType } from "./logoTypes";

function Logo({ className }: LogoType) {
    return <img src={LogoImage} className={`${className} logo`} />;
}

export default Logo;
