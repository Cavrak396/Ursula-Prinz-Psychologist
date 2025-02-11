import { SharedRowProps } from "./types/psychoteraphyTypes";
import PsychoteraphyRowText from "./PsychoteraphyRowText";
import Title from "../../reusable/titles/TItle";

function PsychoteraphyRowTexts({
  row,
  getModifiedClass,
  isModified,
}: SharedRowProps) {
  const texts = [row.firstText, row.secondText, row.thirdText];

  const renderTitleContent = () => {
    if (row.id === 1 && isModified) {
      return (
        <>
          Psychoterapie &
          <span className="psychoteraphy__title-decoration">
            Integrative Therapie
          </span>
        </>
      );
    }
    return row.title;
  };

  return (
    <div
      className={`psychoteraphy__info-text ${getModifiedClass(
        isModified,
        "psychoteraphy__info-text"
      )}`}
    >
      <div
        className={`psychoteraphy__info-text-holder ${getModifiedClass(
          isModified,
          "psychoteraphy__info-text-holder"
        )}`}
      >
        <Title
          className={`psychoteraphy__title title ${getModifiedClass(
            isModified,
            "psychoteraphy__title"
          )}`}
        >
          {renderTitleContent()}
        </Title>

        {texts.map((text, index) => (
          <PsychoteraphyRowText text={text} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PsychoteraphyRowTexts;
