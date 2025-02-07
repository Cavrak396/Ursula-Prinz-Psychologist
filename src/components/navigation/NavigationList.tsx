import { useState, forwardRef } from "react";
import NavigationItem from "./NavigationItem";
import { navigationLinks } from "./utils/navigationUtils";
import { NavigationListProps } from "./types/navigationTypes";

const NavigationList = forwardRef<HTMLUListElement, NavigationListProps>(
  ({ isActiveMenu }: NavigationListProps, ref) => {
    const [isActive, setIsActive] = useState<number>(1);

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
            setIsActive={setIsActive}
          />
        ))}
      </ul>
    );
  }
);

export default NavigationList;
