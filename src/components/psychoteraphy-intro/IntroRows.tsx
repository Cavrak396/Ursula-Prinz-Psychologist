import { introUtils } from "./utils/introUtils";
import IntroRow from "./IntroRow";

function IntroRows() {
  return (
    <>
      <div className="intro__rows">
        {introUtils.map((row) => {
          return <IntroRow key={row.id} row={row} />;
        })}
      </div>
    </>
  );
}

export default IntroRows;
