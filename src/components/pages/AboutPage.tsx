import Banner from "../banner/Banner";
import AboutPageBannerImage from "../../assets/images/banner/ursula-prinz.png";
import AboutPagePsychotherapist from "../about-page-psychotherapist/AboutPagePsychotherapist";

function AboutPage() {
  return (
    <main>
      <div className="about__page">
        <Banner bgImage={AboutPageBannerImage} page="About" />
        <AboutPagePsychotherapist />
      </div>
    </main>
  );
}

export default AboutPage;
