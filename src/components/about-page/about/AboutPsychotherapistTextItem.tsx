import { AboutPsychotherapistLineType } from "./types/about-page-psychotherapistTypes";

function AboutPsychotherapistTextItem({ item }: AboutPsychotherapistLineType) {
  return <p className="about__psychotherapist-text-line">{item.text}</p>;
}

export default AboutPsychotherapistTextItem;
