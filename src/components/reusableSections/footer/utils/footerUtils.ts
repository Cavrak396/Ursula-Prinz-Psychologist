import { LinksTypes } from "../../navigation/types/navigationTypes";
import { FooterContactTypes } from "../types/footerTypes";
import Location from "../../../../assets/images/footer/location.svg";
import Phone from "../../../../assets/images/footer/phone.svg";
import Email from "../../../../assets/images/footer/email.svg";
import Linkedin from "../../../../assets/images/footer/linkedin.svg";

export const footerUtils: LinksTypes[] = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'Über mich' },
    { id: 3, link: 'Ablauf' },
    { id: 4, link: 'Impressum' },
    { id: 5, link: 'Datenschutz' },
];

export const footerContact: FooterContactTypes[] = [
    {
        id: 1,
        image: Phone,
        contact: '+43800123456',
        link: 'tel:+43800123456',
    },
    {
        id: 2,
        image: Email,
        contact: 'kontakt@mentalgesundheit-salzburg.at',
        link: 'mailto:kontakt@mentalgesundheit-salzburg.at',
    },
    {
        id: 3,
        image: Linkedin,
        contact: 'Institut für mentale Gesundheit Salzburg',
        link: 'https://www.linkedin.com/company/mentalgesundheit-salzburg',
        target: true
    },
    {
        id: 4,
        image: Location,
        contact: 'Müllner Hauptstraße 5, 5020 Salzburg',
        link: 'https://www.google.com/maps?q=Müllner+Hauptstraße+5,+5020+Salzburg',
        target: true
    },
];