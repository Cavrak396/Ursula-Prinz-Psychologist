import { FocusItemType } from "./types/focusTypes";

function FocusItem({ item }: FocusItemType) {
  return <li className="focus__list-item classic-text">{item.text}</li>;
}

export default FocusItem;
