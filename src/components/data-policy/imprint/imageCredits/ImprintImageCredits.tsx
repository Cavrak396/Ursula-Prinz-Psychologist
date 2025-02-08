import SmallTitle from "../../../reusable/titles/SmallTitle";
import ImprintImageCreditsList from "./ImprintImageCreditsList";

function ImprintImageCredits() {
  return (
    <div className="imprint__image-credits">
      <SmallTitle className="imprint__image-credits-title small-title">
        Quelle der verwendeten Bilder:
      </SmallTitle>
      <ImprintImageCreditsList />
    </div>
  );
}

export default ImprintImageCredits;
