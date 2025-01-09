import { FooterSocialItem } from "./types/footerTypes";

function FooterSocialMediaItem({ item }: FooterSocialItem) {
  return (
    <li className="footer__social-item">
      <a
        href={item.link}
        className="footer__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={item.img}
          alt="footer social media"
          className="footer__social-image"
        />
      </a>
    </li>
  );
}

export default FooterSocialMediaItem;
