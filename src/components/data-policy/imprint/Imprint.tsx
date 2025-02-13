import ImprintImageCredits from "./imageCredits/ImprintImageCredits";
import ImprintMediaDisclosure from "./ImprintMediaDisclosure";
import ResponsibleDetails from "../responsible/ResponsibleDetails";
import "./imprint.css";

function Imprint() {
  return (
    <section className="imprint">
      <div className="wrap">
        <ImprintMediaDisclosure />
        <ResponsibleDetails />
        <ImprintImageCredits />
      </div>
    </section>
  );
}

export default Imprint;
