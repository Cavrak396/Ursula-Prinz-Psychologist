import Banner from "../reusableSections/banner/Banner";
import AboutPageBannerImage from "../../assets/images/banner/ursula-prinz.png";
import AboutPsychotherapist from "../about-page/about/AboutPsychotherapist";
import Career from "../about-page/career/Career";

function AboutPage() {
  return (
    <main>
      <Banner bgImage={AboutPageBannerImage} page="About" />
      <AboutPsychotherapist />
      <Career />
    </main>
  );
}

export default AboutPage;
