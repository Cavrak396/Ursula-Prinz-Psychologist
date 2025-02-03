import { CareerTextListItemTypes } from "./types/careerTypes";

function CareerTextListItem({ item }: CareerTextListItemTypes) {
  return <li className="career__text-item">{item}</li>;
}

export default CareerTextListItem;
