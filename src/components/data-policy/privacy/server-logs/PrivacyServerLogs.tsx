import SmallTitle from "../../../reusable/titles/SmallTitle";
import PrivacyServerLogsInfo from "./PrivacyServerLogsInfo";
import PrivacyServerLogsText from "./PrivacyServerLogsText";

function PrivacyServerLogs() {
  return (
    <div className="privacy__server-logs">
      <SmallTitle className="privacy__server-title small-title">
        Server-Log Files
      </SmallTitle>
      <PrivacyServerLogsInfo />
      <PrivacyServerLogsText />
    </div>
  );
}

export default PrivacyServerLogs;
