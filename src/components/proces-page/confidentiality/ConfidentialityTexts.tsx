import ConfidentialityText from "./ConfidentialityText";
import { confidentialityUtils } from "./utils/confidentialityUtils";

function ConfidentialityTexts() {
  return (
    <div className="confidentiality__text-line">
      {confidentialityUtils.map((item) => {
        return <ConfidentialityText item={item} key={item.id} />;
      })}
    </div>
  );
}

export default ConfidentialityTexts;
