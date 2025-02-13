import { ReactNode, MouseEvent } from "react";

export interface ButtonType {
    className: string;
    type: "button" | "submit";
    children: ReactNode;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
