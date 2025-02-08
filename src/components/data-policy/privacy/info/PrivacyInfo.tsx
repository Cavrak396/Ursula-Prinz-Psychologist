import PrivacyInfoItem from "./PrivacyInfoItem";
import { privacyData } from "../utils/privacyData";

function PrivacyInfo() {
  return (
    <div className="privacy__info">
      {privacyData.map((item) => {
        return <PrivacyInfoItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default PrivacyInfo;
