import { PsychoteraphyRowTextProps } from "./types/psychoteraphyTypes";

function PsychoteraphyRowText({ text }: PsychoteraphyRowTextProps) {
  return <p className="psychoteraphy__info-lines">{text}</p>;
}

export default PsychoteraphyRowText;
