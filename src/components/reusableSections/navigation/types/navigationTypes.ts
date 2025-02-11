export interface LinksTypes {
    id: number;
    link: string;
}

export interface NavigationItemProps {
    item: LinksTypes;
    isActive?: number;
    setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavigationListProps {
    isActiveMenu: boolean;
    setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavigationHamburgerProps {
    setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}