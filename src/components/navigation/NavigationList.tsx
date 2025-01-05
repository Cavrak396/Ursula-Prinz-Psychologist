import { useState } from "react";
import NavigationItem from "./NavigationItem";
import { navigationLinks } from "./utils/navigationUtils";

function NavigationList() {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <ul className="navigation__list">
      {navigationLinks.map((link) => {
        return (
          <NavigationItem
            key={link.id}
            link={link}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
    </ul>
  );
}

export default NavigationList;
