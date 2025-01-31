import MainTitle from "../reusable/titles/MainTitle";
import { BannerTextTypes } from "./types/BannerTypes";

function BannerText({ bannerData }: BannerTextTypes) {
  return (
    <div className="banner__text">
      <MainTitle className="banner__title">
        <span className="banner__tittle-decoration">
          {bannerData.boldedWord}
        </span>
        {bannerData.title}
      </MainTitle>
    </div>
  );
}

export default BannerText;
