import LazyImage from "../reusable/lazyLoadingImage/LazyImage";
import { offersItem } from "./types/offersTypes";

function OffersItem({ item }: offersItem) {
  return (
    <li className="offers__offer">
      <LazyImage
        src={item.img}
        alt={item.text}
        className="offers__offer-bubble"
      />
      <span className="offers__offer-tag">{item.text}</span>
    </li>
  );
}

export default OffersItem;
