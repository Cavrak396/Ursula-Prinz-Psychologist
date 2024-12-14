import { LinkType } from "./types/headerTypes";

function HeaderNavigationItem({ link }: LinkType) {
    return (
        <a href="#" className="navigation__link">
            {link.name}
        </a>
    )
}

export default HeaderNavigationItem;