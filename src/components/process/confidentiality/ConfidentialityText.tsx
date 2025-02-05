import Title from "../../reusable/titles/TItle";
import { ConfidentialityPropType } from "./types/confidentialityTypes";

function ConfidentialityText({ item }: ConfidentialityPropType) {
  return (
    <div className="confidentiality__text">
      <Title className="confidentiality__title">{item.title}</Title>
      <p className="confidentiality__lines classic-text">{item.text}</p>
    </div>
  );
}

export default ConfidentialityText;
