export interface PrivacyDataTypes {
    id: number;
    title: string;
    text: string;
}

export interface PrivacyDataItemTypes {
    item: PrivacyDataTypes;
}

export type LinkParts = JSX.Element | string;

export interface ServerLogType {
    id: number;
    text: string;
}

export interface ServerLogItemType {
    item: ServerLogType
}