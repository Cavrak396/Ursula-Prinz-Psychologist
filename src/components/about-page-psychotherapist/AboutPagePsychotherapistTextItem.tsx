import { AboutPsychotherapistLineType } from "./utils/about-page-psychotherapistTypes";

function AboutPagePsychotherapistTextItem({
  item,
}: AboutPsychotherapistLineType) {
  return <p className="about-page__psychotherapist-text-line">{item.text}</p>;
}

export default AboutPagePsychotherapistTextItem;
