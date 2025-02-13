import Banner from "../reusableSections/banner/Banner";
import HomePageBannerImg from "../../assets/images/banner/ursula-prinz.webp";
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
