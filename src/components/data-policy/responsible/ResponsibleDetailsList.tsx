import { responsibleDetailsData } from "../responsible/utils/responsibleUtils";
import ResponsibleDetailsItem from "./ResponsibleDetailsItem";

function ResponsibleDetailsList() {
  return (
    <ul className="responsible__details-list">
      {responsibleDetailsData.map((item) => {
        return <ResponsibleDetailsItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default ResponsibleDetailsList;
