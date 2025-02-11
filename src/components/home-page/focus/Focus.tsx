import Title from "../../reusable/titles/TItle";
import FocusContent from "./FocusContent";
import "./focus.css";

function Focus() {
  return (
    <section className="focus">
      <div className="wrap">
        <Title className="focus__title title">Schwerpunkte</Title>
        <FocusContent />
      </div>
    </section>
  );
}

export default Focus;
