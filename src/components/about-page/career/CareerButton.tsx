import Button from "../../reusable/button/Button";
import { ButtonTypes } from "./types/careerTypes";

function CareerButton({ item, isActive, active }: ButtonTypes) {
  return (
    <li className="career__buttons-item">
      <Button
        className={`${
          active === item.id ? "activated-button" : ""
        } career__button button`}
        type="button"
        onClick={() => isActive(item.id)}
      >
        {item.title}
      </Button>
    </li>
  );
}

export default CareerButton;
