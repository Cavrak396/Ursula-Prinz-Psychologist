function FooterSocialMediaItem({ item }) {
  return (
    <li className="footer__social-item">
      <a href="#" className="footer__social-link">
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
