import AboutPsychotherapistTextItem from "./AboutPsychotherapistTextItem";
import { psychotherapistUtils } from "./utils/about-page-psychotherapistUtils";

function AboutPsychotherapistTextList() {
  return (
    <ul className="about__psychotherapist-text-list">
      {psychotherapistUtils.map((item) => {
        return <AboutPsychotherapistTextItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default AboutPsychotherapistTextList;
