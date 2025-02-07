export interface LinksTypes {
    id: number;
    link: string;
}

export interface NavigationItemProps {
    item: LinksTypes;
    isActive?: number;
    setIsActive?: (id: number) => void;
}

export interface NavigationListProps {
    isActiveMenu: boolean;
}

export interface NavigationHamburgerProps {
    setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
