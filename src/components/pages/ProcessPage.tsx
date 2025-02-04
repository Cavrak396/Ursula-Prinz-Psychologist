import Banner from "../banner/Banner";
import ProcessBanner from "../../assets/images/banner/process-banner.png";
import Consultation from "../process/consultation/Consultation";
import Prices from "../process/prices/Prices";

function ProcessPage() {
  return (
    <main>
      <Banner bgImage={ProcessBanner} page="Process" />
      <Consultation />
      <Prices />
    </main>
  );
}

export default ProcessPage;
