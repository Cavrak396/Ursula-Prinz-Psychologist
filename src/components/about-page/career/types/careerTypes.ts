export interface ButtonsTypes {
    id: number;
    title: string;
}

export interface CareerButtonsTypes {
    isActive: (id: number) => void;
    active: number;
}

export interface ButtonTypes {
    item: ButtonsTypes;
    isActive: (id: number) => void;
    active: number;
}

export interface CareerTextTypes {
    active: number;
}

export interface CareerTextListTypes {
    item: {
        title: string;
        items: string[];
    };
}

export interface CareerTextListItemTypes {
    item: string;
}
