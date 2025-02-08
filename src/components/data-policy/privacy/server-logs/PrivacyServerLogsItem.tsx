import { ServerLogItemType } from "../types/privacyTypes";

function PrivacyServerLogsItem({ item }: ServerLogItemType) {
  return <li className="privacy__server-logs-item">{item.text}</li>;
}

export default PrivacyServerLogsItem;
