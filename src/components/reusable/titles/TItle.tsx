import { TitleType } from "./titlesTypes";
import "./title.css";

function Title({ className, children }: TitleType) {
  return <h2 className={className}>{children}</h2>;
}

export default Title;
