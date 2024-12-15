import { useState } from "react";
import HeaderNavigationItem from "./HeaderNavigationItem";
import { navigationLinks } from "./utils/headerUtils";

function HeaderNavigationList() {
    const [isActive, setIsActive] = useState<number>(1)

    return (
        <ul className="navigation__list">
            {navigationLinks.map((link) => {
                return <HeaderNavigationItem key={link.id} link={link} isActive={isActive} setIsActive={setIsActive} />;
            })}
        </ul>
    );
}

export default HeaderNavigationList;
