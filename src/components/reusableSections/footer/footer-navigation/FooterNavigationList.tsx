import FooterNavigationLink from "./FooterNavigationLink";
import { footerUtils } from "../utils/footerUtils";

function FooterNavigationList() {
  return (
    <ul className="footer__navigation-list">
      {footerUtils.map((item) => {
        return <FooterNavigationLink item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default FooterNavigationList;
