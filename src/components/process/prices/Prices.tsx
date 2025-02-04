import Title from "../../reusable/titles/TItle";
import PricesBubles from "./PricesBubles";
import "./prices.css";

function Prices() {
  return (
    <section className="prices">
      <div className="wrap">
        <Title className="prices__title">Meine Honorarsätze</Title>
        <PricesBubles />
      </div>
    </section>
  );
}

export default Prices;