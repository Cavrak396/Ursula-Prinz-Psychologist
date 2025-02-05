import Banner from "../banner/Banner";
import ProcessBanner from "../../assets/images/banner/process-banner.png";
import Consultation from "../process/consultation/Consultation";
import Prices from "../process/prices/Prices";
import Confidentiality from "../process/confidentiality/Confidentiality";

function ProcessPage() {
  return (
    <main>
      <Banner bgImage={ProcessBanner} page="Process" />
      <Consultation />
      <Prices />
      <Confidentiality />
    </main>
  );
}

export default ProcessPage;