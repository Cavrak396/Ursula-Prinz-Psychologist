import Title from "../../reusable/titles/TItle";
import CancellationText from "./CancellationText";
import "./cancellation.css";

function Cancellation() {
  return (
    <section className="cancellation">
      <div className="wrap">
        <Title className="cancellation__title">Absageregelung</Title>
        <CancellationText />
      </div>
    </section>
  );
}

export default Cancellation;