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
          Verantwortliche Stelle & Kontakt
        </SmallTitle>
      )}
      <SmallTitle className="responsible__details-title small-title">
        Verantwortliche Stelle gemäß § 5 TMG / Art. 4 Nr. 7 DSGVO
      </SmallTitle>
      {isPrivacyPage && (
        <p className="responsible__details-introduction">
          Die nachfolgend genannte Stelle ist verantwortlich für die
          Verarbeitung personenbezogener Daten im Sinne der
          Datenschutz-Grundverordnung (DSGVO).
        </p>
      )}
      <ResponsibleDetailsList />
    </div>
  );
}

export default ResponsibleDetails;
