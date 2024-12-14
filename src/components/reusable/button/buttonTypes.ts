import { ReactNode } from "react";

export interface ButtonType {
    uniqueClass: string;
    type: "button" | "submit";
    children: ReactNode
}