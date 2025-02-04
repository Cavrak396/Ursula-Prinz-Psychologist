import ConsultationScheduling from "./ConsultationScheduling";
import ConsultationText from "./ConsultationText";
import "./consultation.css";

function Consultation() {
  return (
    <section className="consultation">
      <div className="wrap">
        <ConsultationText />
        <ConsultationScheduling />
      </div>
    </section>
  );
}

export default Consultation;
