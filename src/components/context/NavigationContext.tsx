import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToLink } from "./utils/navigationContextUtils";
import {
  NavigationContextType,
  NavigationProviderProps,
} from "./types/navigationContext";

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [activeLink, setActiveLinkState] = useState<string>(
    sessionStorage.getItem("activeLink") || ""
  );
  const navigate = useNavigate();

  const setActiveLink: NavigationContextType["setActiveLink"] = (link, id) => {
    setActiveLinkState(id);
    sessionStorage.setItem("activeLink", id);
    navigateToLink(link, navigate);
  };

  return (
    <NavigationContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavigationContext.Provider>
  );
};
