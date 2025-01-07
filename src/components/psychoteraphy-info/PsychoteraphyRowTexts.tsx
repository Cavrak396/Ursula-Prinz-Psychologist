import PsychoteraphyRowText from "./PsychoteraphyRowText";
import { PsychoteraphyRowProps } from "./types/psychoteraphyTypes";
import Title from "../reusable/titles/TItle";

function PsychoteraphyRowTexts({ row }: PsychoteraphyRowProps) {
  const texts = [row.firstText, row.secondText, row.thirdText];

  return (
    <div className="psychoteraphy__info-text">
      <Title className="psychoteraphy__title">{row.title}</Title>
      {texts.map((text, index) => {
        return <PsychoteraphyRowText text={text} key={index} />;
      })}
    </div>
  );
}

export default PsychoteraphyRowTexts;
