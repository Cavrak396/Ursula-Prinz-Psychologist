import { FooterContactItemType } from "../types/footerTypes";

function FooterContactItem({ item }: FooterContactItemType) {
  return (
    <li className="footer__contact-item">
      <a
        className="footer__contact-link"
        href={item.link}
        rel="noopener noreferrer"
      >
        <img
          src={item.image}
          alt="contact image"
          className="footer__contact-link-img"
        />
        <span className="footer__contact-link-text">{item.contact}</span>
      </a>
    </li>
  );
}

export default FooterContactItem;