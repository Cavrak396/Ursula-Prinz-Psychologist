import { TitleType } from "./titlesTypes";

function SmallTitle({ className, children }: TitleType) {
  return <h3 className={className}>{children}</h3>;
}

export default SmallTitle;
