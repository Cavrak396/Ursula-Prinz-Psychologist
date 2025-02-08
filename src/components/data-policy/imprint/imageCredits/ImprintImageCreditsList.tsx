import { imprintImageCredits } from "../utils/imprintUtils";
import ImprintImageCreditsItem from "./ImprintImageCreditsItem";

function ImprintImageCreditsList() {
  return (
    <ul className="imprint__image-credits-list">
      {imprintImageCredits.map((item) => {
        return <ImprintImageCreditsItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default ImprintImageCreditsList;
