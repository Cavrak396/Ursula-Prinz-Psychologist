import AboutPhoto from "./AboutPhoto";
import AboutRowText from "./AboutRowText";

function AboutRow() {
  return (
    <div className="about__row">
      <AboutRowText />
      <AboutPhoto />
    </div>
  );
}

export default AboutRow;
