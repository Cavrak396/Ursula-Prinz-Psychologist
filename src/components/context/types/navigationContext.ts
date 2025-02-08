export interface NavigationContextType {
    activeLink: string;
    setActiveLink: (link: string, id: string) => void;
}

export interface NavigationProviderProps {
    children: React.ReactNode;
}
