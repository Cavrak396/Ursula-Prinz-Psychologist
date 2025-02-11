import { useState } from "react";
import CareerButtons from "./CareerButtons";
import CareerText from "./CareerText";
import "./career.css";

function Career() {
  const [active, setActive] = useState(1);

  return (
    <section className="career">
      <div className="wrap">
        <CareerButtons isActive={setActive} active={active} />
        <CareerText active={active} />
      </div>
    </section>
  );
}

export default Career;
