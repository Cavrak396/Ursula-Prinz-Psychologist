import SmallTitle from "../../../reusable/titles/SmallTitle";
import { PrivacyDataItemTypes } from "../types/privacyTypes";
import { createLinksFromText } from "../utils/privacyData";

function PrivacyInfoItem({ item }: PrivacyDataItemTypes) {
  const textWithLinks = createLinksFromText(item.text);

  return (
    <div className="privacy__info-holder">
      <SmallTitle className="privacy__info-title small-title">
        {item.title}
      </SmallTitle>
      <p className="privacy__info-text">{textWithLinks}</p>
    </div>
  );
}

export default PrivacyInfoItem;
