import Banner from "../banner/Banner";
import HomePageBannerImg from "../../assets/images/banner/ursula-prinz.png";
import Privacy from "../data-policy/privacy/Privacy";

function PrivacyPage() {
  return (
    <main>
      <Banner bgImage={HomePageBannerImg} page="Privacy"></Banner>
      <Privacy />
    </main>
  );
}

export default PrivacyPage;
