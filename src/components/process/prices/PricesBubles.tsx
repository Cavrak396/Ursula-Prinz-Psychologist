import PricesBuble from "./PricesBuble";
import { pricesBubles } from "./utils/pricesUtils";

function PricesBubles() {
  return (
    <ul className="prices__bubbles">
      {pricesBubles.map((item) => {
        return <PricesBuble item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default PricesBubles;
