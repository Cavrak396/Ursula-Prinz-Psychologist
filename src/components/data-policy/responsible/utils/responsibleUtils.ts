import { ResponsibleDetails } from "../types/responsibleTypes";

export const responsibleDetailsData: ResponsibleDetails[] = [
    { id: 1, tag: 'Telefon:', text: '+43 800 123456' },
    { id: 2, tag: 'E-Mail:', text: 'kontakt@mentalgesundheit-salzburg.at' },
    { id: 3, tag: 'Web:', text: 'www.mentalgesundheit-salzburg.at', link: 'https://www.mentalgesundheit-salzburg.at' },
    { id: 4, tag: 'Adresse:', text: 'Müllner Hauptstraße 5, 5020 Salzburg' },
    {
        id: 5,
        tag: 'Zuständige Aufsichtsbehörde:',
        text: 'Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz',
        link: 'https://www.sozialministerium.at/'
    },
    { id: 6, tag: 'Gesetzliche Grundlage:', text: 'Psychotherapiegesetz (PthG)' }
];