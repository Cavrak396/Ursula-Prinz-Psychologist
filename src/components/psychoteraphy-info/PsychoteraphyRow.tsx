import LazyImage from "../reusable/lazyLoadingImage/LazyImage";
import {
  GetModifiedClass,
  PsychoteraphyRowProps,
} from "./types/psychoteraphyTypes";

const getModifiedClass: GetModifiedClass = (isModified, baseClass) =>
  isModified ? `${baseClass}--modified` : "";

function PsychoteraphyRow({ row }: PsychoteraphyRowProps) {
  const isModified = row.id % 2 !== 0;

  return (
    <div
      className={`psychoteraphy__info-row ${getModifiedClass(
        isModified,
        "psychoteraphy__info-row"
      )}`}
    >
      <div className="wrap">
        <div
          className={`psychoteraphy__info-row-line ${getModifiedClass(
            isModified,
            "psychoteraphy__info-row-line"
          )}`}
        >
          <div className="psychoteraphy__info-text">
            <p className="psychoteraphy__info-lines">{row.text}</p>
          </div>
          <div
            className={`psychoteraphy__info-photo ${getModifiedClass(
              isModified,
              "psychoteraphy__info-photo"
            )}`}
          >
            <LazyImage
              src={row.img}
              className="psychoteraphy__info-img"
              alt={`Psychoteraphy image for ${row.text}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PsychoteraphyRow;
