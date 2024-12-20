import Logo from "../reusable/logo/Logo";
import "./footer.css";
import FooterCopyright from "./FooterCopyright";
import FooterNavigation from "./FooterNavigation";
import FooterSocialMediaList from "./FooterSocialMediaList";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__holder">
        <div className="wrap">
          <Logo className="footer__logo" />
          <FooterNavigation />
          <FooterSocialMediaList />
        </div>
      </div>
      <FooterCopyright />
    </section>
  );
}

export default Footer;