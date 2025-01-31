import MainTitle from "../reusable/titles/MainTitle";
import { BannerTextTypes } from "./types/BannerTypes";

function BannerText({ boldedWord, title }: BannerTextTypes) {
  return (
    <div className="banner__text">
      <MainTitle className="banner__title">
        <span className="banner__tittle-decoration">{boldedWord}</span>
        {title}
      </MainTitle>
    </div>
  );
}

export default BannerText;
