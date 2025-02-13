import { TitleType } from "./titlesTypes";

function MainTitle({ className, children }: TitleType) {
    return <h1 className={className}>{children}</h1>
}

export default MainTitle;