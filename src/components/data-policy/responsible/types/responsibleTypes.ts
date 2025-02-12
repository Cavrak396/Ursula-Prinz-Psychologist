export interface ResponsibleDetails {
    id: number,
    tag: string,
    text: string,
    link?: string
}

export interface ResponsibleDetailsItemType {
    item: ResponsibleDetails
}

export interface ResponsiblePagePropType {
    page?: string;
}