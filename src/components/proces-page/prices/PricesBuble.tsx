import LazyImage from "../../reusable/lazyLoadingImage/LazyImage";
import PricesBubbleText from "./PricesBubbleText";
import { PricesItemType } from "./types/pricesTypes";

function PricesBuble({ item }: PricesItemType) {
  return (
    <li className="prices__bubble">
      <LazyImage src={item.img} alt="bubble" className="prices__bubble-image" />
      <PricesBubbleText item={item} />
    </li>
  );
}

export default PricesBuble;
