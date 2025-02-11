import CareerTextListItem from "./CareerTextListItem";
import { CareerTextListTypes } from "./types/careerTypes";

function CareerTextList({ item }: CareerTextListTypes) {
  return (
    <ul className="career__text-list">
      {item.items.map((careerItem, index) => (
        <CareerTextListItem key={index} item={careerItem} />
      ))}
    </ul>
  );
}

export default CareerTextList;
