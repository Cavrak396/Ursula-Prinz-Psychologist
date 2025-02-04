import { PricesItemType } from "./types/pricesTypes";

function PricesBubbleText({ item }: PricesItemType) {
  return (
    <div className="prices__bubble-text">
      <span className="prices__bubble-tag">{item.text}</span>
      <span className="prices__bubble-time">{item.time}</span>
      <span className="prices__bubble-price">{item.price}</span>
    </div>
  );
}

export default PricesBubbleText;
