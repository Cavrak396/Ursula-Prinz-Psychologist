import Banner from "../reusableSections/banner/Banner";
import HomePageBannerImg from "../../assets/images/banner/ursula-prinz.png";
import Imprint from "../data-policy/imprint/Imprint";

function ImprintPage() {
  return (
    <main>
      <Banner bgImage={HomePageBannerImg} page="Imprint" />
      <Imprint />
    </main>
  );
}

export default ImprintPage;
