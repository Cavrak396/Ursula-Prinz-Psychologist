import PricesBuble from "../../proces-page/prices/PricesBuble";
import { pricesBubles } from "../../proces-page/prices/utils/pricesUtils";

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
