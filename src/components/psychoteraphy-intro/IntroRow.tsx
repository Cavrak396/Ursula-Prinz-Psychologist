import LazyImage from "../reusable/lazyLoadingImage/LazyImage";
import IntroRowText from "./IntroRowText";
import { RowType } from "./types/introTypes";

function IntroRow({ row }: RowType) {
  const reverseClass = row.id % 2 === 0 ? "intro__row-reverse" : "";

  return (
    <div className={`intro__row ${reverseClass}`}>
      <IntroRowText row={row} />
      <div className="intro__row-image-holder">
        <LazyImage
          src={row.image}
          alt="intro image"
          className="intro__row-image"
        />
      </div>
    </div>
  );
}

export default IntroRow;
