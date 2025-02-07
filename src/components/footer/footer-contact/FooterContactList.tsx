import { footerContact } from "../utils/footerUtils";
import FooterContactItem from "./FooterContactItem";

function FooterContactList() {
  return (
    <ul className="footer__contact-list">
      {footerContact.map((item) => {
        return <FooterContactItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default FooterContactList;
