import Title from "../reusable/titles/TItle";
import PsychoteraphyRows from "./PsychoteraphyRows";
import "./psychoteraphyInfo.css";

function PsychoteraphyInfo() {
  return (
    <div className="psychoteraphy__info">
      <Title className="pshychoteraphy__title">
        Psychotherapie &{" "}
        <span className="pshychoteraphy__title-decoration">
          Integrative Therapie
        </span>
      </Title>
      <PsychoteraphyRows />
    </div>
  );
}

export default PsychoteraphyInfo;
