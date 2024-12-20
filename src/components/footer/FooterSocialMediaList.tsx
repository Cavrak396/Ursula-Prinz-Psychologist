import FooterSocialMediaItem from "./FooterSocialMediaItem";
import { footerSocial } from "./utils/footerUtils";

function FooterSocialMediaList() {
  return (
    <ul className="footer__social-medias">
      {footerSocial.map((item) => {
        return <FooterSocialMediaItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default FooterSocialMediaList;
