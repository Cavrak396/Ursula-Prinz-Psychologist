import Title from "../../reusable/titles/TItle";
import PricesBubles from "./PricesBubles";
import PricesSpecialOffer from "./PricesSpecialOffer";
import "./prices.css";

function Prices() {
  return (
    <section className="prices">
      <div className="wrap">
        <Title className="prices__title">Meine Honorarsätze</Title>
        <PricesBubles />
        <PricesSpecialOffer />
      </div>
    </section>
  );
}

export default Prices;