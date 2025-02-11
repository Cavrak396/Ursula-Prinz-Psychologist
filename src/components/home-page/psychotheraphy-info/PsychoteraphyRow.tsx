import { useCallback, useMemo } from "react";
import PsychoteraphyRowTexts from "./PsychoteraphyRowTexts";
import {
  GetModifiedClass,
  PsychoteraphyRowProps,
} from "./types/psychoteraphyTypes";
import PsychoteraphyPhoto from "./PsychoteraphyPhoto";

function PsychoteraphyRow({ row }: PsychoteraphyRowProps) {
  const isModified = useMemo(() => row.id % 2 !== 0, [row.id]);

  const getModifiedClass: GetModifiedClass = useCallback(
    (isModified, baseClass) => (isModified ? `${baseClass}--modified` : ""),
    []
  );

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
          <PsychoteraphyRowTexts
            row={row}
            getModifiedClass={getModifiedClass}
            isModified={isModified}
          />
          <PsychoteraphyPhoto
            row={row}
            getModifiedClass={getModifiedClass}
            isModified={isModified}
          />
        </div>
      </div>
    </div>
  );
}

export default PsychoteraphyRow;
