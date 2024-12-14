import LogoImage from "../../../assets/images/logo.png";
import { LogoType } from "./logoTypes";

function Logo({ uniqueClass }: LogoType) {
    return <img src={LogoImage} className={`${uniqueClass} logo`} />;
}

export default Logo;
