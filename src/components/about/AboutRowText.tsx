import Title from "../reusable/titles/TItle";
import AboutText from "./AboutText";
import { aboutUtils } from "./utils/aboutUtils";

function AboutRowText() {
  return (
    <div className="about__text">
      <Title className="about__title">Über mich</Title>
      {aboutUtils.map((item) => (
        <AboutText key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AboutRowText;
