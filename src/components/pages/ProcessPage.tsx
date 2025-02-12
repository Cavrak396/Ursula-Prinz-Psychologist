import Banner from "../reusableSections/banner/Banner";
import ProcessBanner from "../../assets/images/banner/process-banner.webp";
import Consultation from "../proces-page/consultation/Consultation";
import Prices from "../proces-page/prices/Prices";
import Confidentiality from "../proces-page/confidentiality/Confidentiality";
import Cancellation from "../proces-page/cancellation/Cancellation";

function ProcessPage() {
  return (
    <main>
      <Banner bgImage={ProcessBanner} page="Process" />
      <Consultation />
      <Prices />
      <Cancellation />
      <Confidentiality />
    </main>
  );
}

export default ProcessPage;
