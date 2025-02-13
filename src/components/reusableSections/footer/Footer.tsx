import FooterContent from "./FooterContent";
import FooterCopyRight from "./copyright/FooterCopyright";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <FooterContent />
        <FooterCopyRight />
      </div>
    </footer>
  );
}

export default Footer;
