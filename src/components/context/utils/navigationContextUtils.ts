import { NavigateFunction } from "react-router-dom";

export const navigateToLink = (link: string, navigate: NavigateFunction): void => {
    if (link === "Über mich") {
        navigate("/about");
    } else if (link === "Ablauf") {
        navigate("/process");
    } else {
        navigate("/");
    }
};
