import HeaderNavigationItem from "./HeaderNavigationItem";
import { navigationLinks } from "./utils/headerUtils";

function HeaderNavigationList() {
    return (
        <ul className="navigation__list">
            {navigationLinks.map((link) => {
                return <HeaderNavigationItem key={link.id} link={link} />;
            })}
        </ul>
    );
}

export default HeaderNavigationList;
