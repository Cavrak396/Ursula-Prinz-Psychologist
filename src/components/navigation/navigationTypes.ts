export interface LinksTypes {
    id: number;
    name: string
}

export interface LinkType {
    link: LinksTypes;
    isActive?: number;
    setIsActive?: (id: number) => void;
}