import Title from "../../reusable/titles/TItle";
import OffersList from "./OffersList";
import "./offers.css";

function Offers() {
  return (
    <section className="offers">
      <div className="wrap">
        <Title className="offers__title title">Angebot</Title>
        <OffersList />
      </div>
    </section>
  );
}

export default Offers;
