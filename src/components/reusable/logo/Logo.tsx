import LogoImage from "../../../assets/images/header/logo.png";
import { LogoType } from "./logoTypes";

function Logo({ uniqueClass }: LogoType) {
    return <img src={LogoImage} className={`${uniqueClass} logo`} />;
}

export default Logo;
