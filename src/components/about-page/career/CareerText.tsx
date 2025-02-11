import CareerTextList from "./CareerTextList";
import { careerTexts } from "./utils/careerUtils";
import { CareerTextTypes } from "./types/careerTypes";

function CareerText({ active }: CareerTextTypes) {
  return (
    <div className="career__text">
      {careerTexts
        .filter((item) => item.id === active)
        .map((item) => (
          <CareerTextList key={item.id} item={item} />
        ))}
    </div>
  );
}

export default CareerText;
