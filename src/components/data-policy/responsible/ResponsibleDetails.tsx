import ResponsibleDetailsList from "./ResponsibleDetailsList";
import { ResponsiblePagePropType } from "./types/responsibleTypes";
import SmallTitle from "../../reusable/titles/SmallTitle";
import "./responsible.css";

function ResponsibleDetails({ page }: ResponsiblePagePropType) {
  const isPrivacyPage = page === "privacy";

  return (
    <div className="responsible__details">
      {isPrivacyPage && (
        <SmallTitle className="responsible__details-title small-title">
          Verantwortliche und Kontaktdaten
        </SmallTitle>
      )}
      <SmallTitle className="responsible__details-title small-title">
        Mag. a (FH) Ursula Prinz, MSc
      </SmallTitle>
      {isPrivacyPage && (
        <p className="responsible__details-introduction">
          Verantwortliche für die Datenverarbeitung gemäß
          Datenschutzgrundverordung (DSGVO) ist:
        </p>
      )}
      <ResponsibleDetailsList />
    </div>
  );
}

export default ResponsibleDetails;
