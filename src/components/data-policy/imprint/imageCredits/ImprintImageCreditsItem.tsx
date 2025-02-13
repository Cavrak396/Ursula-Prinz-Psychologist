import { ImprintImageCreditsItemType } from "../types/imprintTypes";

function ImprintImageCreditsItem({ item }: ImprintImageCreditsItemType) {
  return <li className="imprint__image-credits-item">{item.text}</li>;
}

export default ImprintImageCreditsItem;
