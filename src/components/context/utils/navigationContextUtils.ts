import { NavigateFunction } from "react-router-dom";

export const navigateToLink = (link: string, navigate: NavigateFunction): void => {
    switch (link) {
        case "Über mich":
            navigate("/about");
            break;
        case "Ablauf":
            navigate("/process");
            break;
        case "Impressum":
            navigate("/imprint");
            break;
        case "Datenschutz":
            navigate("/privacy");
            break;
        default:
            navigate("/");
    }
};
