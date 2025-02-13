import { CareerTextListItemTypes } from "./types/careerTypes";

function CareerTextListItem({ item }: CareerTextListItemTypes) {
  return <li className="career__text-item classic-text">{item}</li>;
}

export default CareerTextListItem;
