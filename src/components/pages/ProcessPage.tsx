import Banner from "../banner/Banner";
import ProcessBanner from "../../assets/images/banner/process-banner.png";
import Consultation from "../process/consultation/Consultation";

function ProcessPage() {
  return (
    <main>
      <Banner bgImage={ProcessBanner} page="Process" />
      <Consultation />
    </main>
  );
}

export default ProcessPage;
