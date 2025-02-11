import FooterContact from "./footer-contact/FooterContact";
import FooterLogo from "./footer-logo/FooterLogo";
import FooterNavigation from "./footer-navigation/FooterNavigation";

function FooterContent() {
  return (
    <div className="footer__line">
      <FooterLogo />
      <FooterNavigation />
      <FooterContact />
    </div>
  );
}

export default FooterContent;
