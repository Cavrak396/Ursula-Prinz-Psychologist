import { useState, useEffect, forwardRef, useCallback } from "react";
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

    const handleLinkClick = useCallback(() => {
      if (isActiveMenu) {
        setIsActiveMenu(false);
      }
    }, [isActiveMenu, setIsActiveMenu]);

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
            setIsActive={(id) => {
              setIsActive(id);
              handleLinkClick();
            }}
          />
        ))}
      </ul>
    );
  }
);

export default NavigationList;
