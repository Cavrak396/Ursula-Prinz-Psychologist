import Logo from "../../reusable/logo/Logo";
import FooterProfessionalInfo from "../footer-contact/info/FooterProfessionalInfo";

function FooterLogo() {
  return (
    <div className="footer__container">
      <Logo className="footer__logo" alt="footer logo" />
      <FooterProfessionalInfo />
    </div>
  );
}

export default FooterLogo;
