import { LinkType } from "../navigation/navigationTypes";

function HeaderNavigationItem({ link, isActive, setIsActive }: LinkType) {
    return (
        <li className="navigation__list-item">
            <a
                onClick={(e) => { e.preventDefault(); setIsActive(link.id) }}
                href="#"
                className={`navigation__list-link ${isActive === link.id ? "active-link" : ""}`}
            >
                {link.name}
            </a>
        </li>
    );
}

export default HeaderNavigationItem;
