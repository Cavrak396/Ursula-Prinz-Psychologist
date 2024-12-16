import Title from "../reusable/titles/TItle";
import { RowType } from "./types/introTypes";

function IntroRowText({ row }: RowType) {
  return (
    <div className="intro__row-text-holder">
      <div className="intro__row-text">
        <Title className="intro__row-title"> {row.title} </Title>
        <p className="intro__row-lines">{row.text}</p>
      </div>
    </div>
  );
}

export default IntroRowText;
