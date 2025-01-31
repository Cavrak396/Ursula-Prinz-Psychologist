import Banner from "../banner/Banner";
import AboutPageBannerImage from "../../assets/images/banner/ursula-prinz.png";

function AboutPage() {
  return (
    <div className="about__page">
      <Banner bgImage={AboutPageBannerImage} page="About" />
    </div>
  );
}

export default AboutPage;
