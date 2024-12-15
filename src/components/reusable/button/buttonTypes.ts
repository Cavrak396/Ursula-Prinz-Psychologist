import { ReactNode } from "react";

export interface ButtonType {
    className: string;
    type: "button" | "submit";
    children: ReactNode
}