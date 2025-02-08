import ImprintDetails from "../responsible/ResponsibleDetails";
import ImprintImageCredits from "./imageCredits/ImprintImageCredits";
import ImprintMediaDisclosure from "./ImprintMediaDisclosure";
import "./imprint.css";

function Imprint() {
  return (
    <section className="imprint">
      <div className="wrap">
        <ImprintMediaDisclosure />
        <ImprintDetails />
        <ImprintImageCredits />
      </div>
    </section>
  );
}

export default Imprint;
