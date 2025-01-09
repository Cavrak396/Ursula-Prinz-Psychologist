export interface LinksTypes {
    id: number;
    name: string;
}

export interface NavigationItemProps {
    link: LinksTypes;
    isActive: number;
    setIsActive: (id: number) => void;
}

export interface NavigationListProps {
    isActiveMenu: boolean;
}

export interface NavigationHamburgerProps {
    setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
