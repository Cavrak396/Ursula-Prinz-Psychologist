import { TitleType } from "./titlesTypes";

function Title({ className, children }: TitleType) {
  return <h2 className={className}>{children}</h2>;
}

export default Title;
