import { useState, useEffect, useRef } from "react";
import NavigationHamburger from "./NavigationHamburger";
import NavigationList from "./NavigationList";

function Navigation() {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsActiveMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navigation">
      <NavigationList
        ref={listRef}
        isActiveMenu={isActiveMenu}
        setIsActiveMenu={setIsActiveMenu}
      />
      <NavigationHamburger setIsActiveMenu={setIsActiveMenu} />
    </nav>
  );
}

export default Navigation;
