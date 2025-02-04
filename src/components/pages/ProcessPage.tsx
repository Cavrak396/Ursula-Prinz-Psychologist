import Banner from "../banner/Banner";
import ProcessBanner from "../../assets/images/banner/process-banner.png";

function ProcessPage() {
  return (
    <main>
      <Banner bgImage={ProcessBanner} page="Process" />
    </main>
  );
}

export default ProcessPage;
