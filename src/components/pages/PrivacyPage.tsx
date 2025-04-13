import Banner from "../reusableSections/banner/Banner";
import HomePageBannerImg from "../../assets/images/banner/banner-image.webp";
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
