import OffersItem from "./OffersItem";
import { offers } from "./utils/offersUtils";

function OffersList() {
  return (
    <ul className="offers__list">
      {offers.map((item) => {
        return <OffersItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default OffersList;
