import Title from "../reusable/titles/TItle";
import AboutText from "./AboutText";
import { aboutUtils } from "./utils/aboutUtils";

function AboutRowText() {
  return (
    <div className="about__text">
      <div className="about__text-holder">
        <Title className="about__title title">Über mich</Title>
        {aboutUtils.map((item) => (
          <AboutText key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AboutRowText;
