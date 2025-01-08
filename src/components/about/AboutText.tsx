import Title from "../reusable/titles/TItle";
import { aboutUtils } from "./utils/aboutUtils";

function AboutText() {
  return (
    <div className="about__text">
        <Title className="about__title">Über mich</Title>
      {aboutUtils.map((item) => (
        <p key={item.id} className="about__lines">
          {item.text}
        </p>
      ))}
    </div>
  );
}

export default AboutText;
