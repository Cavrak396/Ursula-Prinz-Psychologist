import { serverLogs } from "../utils/privacyData";
import PrivacyServerLogsItem from "./PrivacyServerLogsItem";

function PrivacyServerLogsInfo() {
  return (
    <>
      <p className="privacy__server-logs-text">
        Diese Webseite und der damit verbundene Provider erhebt im Zuge der
        Webseitennutzung automatisch Informationen im Rahmen sogenannter
        „Server-Log Files“. Dies betrifft insbesondere:
      </p>
      <ul className="privacy__server-logs-list">
        {serverLogs.map((item) => {
          return <PrivacyServerLogsItem key={item.id} item={item} />;
        })}
      </ul>
    </>
  );
}

export default PrivacyServerLogsInfo;
