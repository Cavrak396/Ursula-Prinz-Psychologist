import { psychoteraphyInfo } from "./utils/psychoteraphyUtils";
import PsychoteraphyRow from "./PsychoteraphyRow";

function PsychoteraphyRows() {
  return (
    <ul className="psychoteraphy__info-rows">
      {psychoteraphyInfo.map((row) => {
        return <PsychoteraphyRow row={row} key={row.id} />;
      })}
    </ul>
  );
}

export default PsychoteraphyRows;
