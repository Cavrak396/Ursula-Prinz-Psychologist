import AboutPagePsychotherapistTextItem from "./AboutPagePsychotherapistTextItem";
import { psychotherapistUtils } from "./utils/about-page-psychotherapistUtils";

function AboutPagePsychotherapistTextList() {
  return (
    <ul className="about-page__psychotherapist-text-list">
      {psychotherapistUtils.map((item) => {
        return <AboutPagePsychotherapistTextItem item={item} key={item.id}/>;
      })}
    </ul>
  );
}

export default AboutPagePsychotherapistTextList;
