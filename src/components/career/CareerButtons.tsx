import CareerButton from "./CareerButton";
import { CareerButtonsTypes } from "./types/careerTypes";
import { careerButtons } from "./utils/careerUtils";

function CareerButtons({ isActive, active }: CareerButtonsTypes) {
  return (
    <ul className="career__buttons-list">
      {careerButtons.map((item) => {
        return (
          <CareerButton
            item={item}
            key={item.id}
            isActive={isActive}
            active={active}
          />
        );
      })}
    </ul>
  );
}

export default CareerButtons;
