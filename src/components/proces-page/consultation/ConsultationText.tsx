import Title from "../../reusable/titles/TItle";

function ConsultationText() {
  return (
    <div className="consultation__text">
      <Title className="consultation__text-title title">Erstgespräch</Title>
      <p className="consultation__text-lines classic-text">
        Im Erstgespräch haben Sie die Möglichkeit, in einem geschützten Rahmen
        über das zu sprechen, was Sie bewegt. Es geht darum, erste Eindrücke zu
        gewinnen, Fragen zu klären und gemeinsam zu überlegen, ob eine
        therapeutische Zusammenarbeit passend erscheint.
      </p>
    </div>
  );
}

export default ConsultationText;
