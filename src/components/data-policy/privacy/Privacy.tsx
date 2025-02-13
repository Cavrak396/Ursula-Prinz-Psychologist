import PrivacyInfo from "./info/PrivacyInfo";
import PrivacyServerLogs from "./server-logs/PrivacyServerLogs";
import ResponsibleDetails from "../responsible/ResponsibleDetails";
import "./privacy.css";

function Privacy() {
  return (
    <section className="privacy">
      <div className="wrap">
        <div className="privacy__holder">
          <ResponsibleDetails page="privacy" />
          <PrivacyInfo />
          <PrivacyServerLogs />
        </div>
      </div>
    </section>
  );
}

export default Privacy;
