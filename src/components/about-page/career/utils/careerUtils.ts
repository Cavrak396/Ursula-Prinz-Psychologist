import { ButtonsTypes } from "../types/careerTypes";

export const careerButtons: ButtonsTypes[] = [
    { id: 1, title: 'Berufsweg und Praktika' },
    { id: 2, title: 'Ausbildungen' }
];

export const careerTexts = [
    {
        id: 1,
        title: 'Berufsweg und Praktika',
        items: [
            'Wissenschaftliche Mitarbeiterin, Institut für Gesundheitswissenschaften, Ferdinand Porsche Fernfachhochschule',
            'Psychotherapeutische Ambulanz (PTA) des ÖAGG',
            '17 Jahre Erfahrung im Marketing- und Kommunikationsbereich',
            'Die Boje, Ambulatorium für Kinder und Jugendliche in Krisensituationen und bei Traumatisierungen',
            'Verein GIN, Teilbetreutes Wohnen für Menschen mit psychischen Erkrankungen',
            'intakt, Therapiezentrum für Menschen mit Essstörungen',
            'Phönix Zentrum, Kinder-Gruppenpsychotherapie (Psychodrama)'
        ]
    },
    {
        id: 2,
        title: 'Ausbildungen',
        items: [
            'Psychotherapeutisches Fachspezifikum für Integrative Therapie, ÖAGG',
            'Masterstudium Psychotherapeutisches Propädeutikum, FH Kärnten',
            'Magisterstudium Kommunikationswirtschaft, FHWien',
            'Nuad Körperarbeit (passives Yoga)'
        ]
    }
];
