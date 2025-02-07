import { LinksTypes } from "../../navigation/types/navigationTypes";
import { FooterContactTypes } from "../types/footerTypes";
import Location from "../../../assets/images/footer/location.svg"
import Phone from "../../../assets/images/footer/phone.svg"
import Email from "../../../assets/images/footer/email.svg"
import Linkedin from "../../../assets/images/footer/linkedin.svg"

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
        contact: '+436606319061',
        link: 'tel:+436606319061',
    },
    {
        id: 2,
        image: Email,
        contact: 'praxis@ursulaprinz.at',
        link: 'mailto:praxis@ursulaprinz.at',
    },
    {
        id: 3,
        image: Linkedin,
        contact: 'Ursula Prinz',
        link: 'https://www.linkedin.com/in/ursula-prinz-a60b1440/?originalSubdomain=at',
    },
    {
        id: 4,
        image: Location,
        contact: 'Hernalser Hauptstraße 15/4/13, 1170 Wien',
        link: 'https://www.google.com/maps?q=Hernalser+Hauptstraße+15/4/13,+1170+Wien',
    },
];