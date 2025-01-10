import LazyImage from "../reusable/lazyLoadingImage/LazyImage";
import { SharedRowProps } from "./types/psychoteraphyTypes";

function PsychoteraphyPhoto({
  row,
  isModified,
  getModifiedClass,
}: SharedRowProps) {
  return (
    <div
      className={`psychoteraphy__info-photo ${getModifiedClass(
        isModified,
        "psychoteraphy__info-photo"
      )}`}
    >
      <LazyImage
        src={row.img}
        className="psychoteraphy__info-img"
        alt="Psychoteraphy image"
      />
    </div>
  );
}

export default PsychoteraphyPhoto;
