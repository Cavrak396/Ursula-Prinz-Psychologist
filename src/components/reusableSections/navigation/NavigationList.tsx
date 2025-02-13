import { useState, useEffect, forwardRef } from "react";
import NavigationItem from "./NavigationItem";
import { navigationLinks } from "./utils/navigationUtils";
import { NavigationListProps } from "./types/navigationTypes";

const NavigationList = forwardRef<HTMLUListElement, NavigationListProps>(
  ({ isActiveMenu, setIsActiveMenu }: NavigationListProps, ref) => {
    const [isActive, setIsActive] = useState<number>(1);

    useEffect(() => {
      const savedActiveLink = sessionStorage.getItem("activeLink");
      if (savedActiveLink) {
        setIsActive(parseInt(savedActiveLink));
      }
    }, []);

    return (
      <ul
        ref={ref}
        role="menu"
        className={`navigation__list ${isActiveMenu && "activated-menu"}`}
      >
        {navigationLinks.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={isActive}
            setIsActiveMenu={setIsActiveMenu}
          />
        ))}
      </ul>
    );
  }
);

export default NavigationList;
