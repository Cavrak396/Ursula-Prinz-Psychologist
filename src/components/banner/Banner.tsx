import BannerText from "./BannerText";
import { BannerTypes } from "./types/BannerTypes";
import { bannerContent } from "./utils/bannerUtils";
import "./banner.css";

function Banner({ bgImage, page }: BannerTypes) {
  const bannerData = bannerContent.find((item) => item.page === page);

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="wrap">
        <div className="banner__text-holder">
          {bannerData && <BannerText bannerData={bannerData} />}
        </div>
      </div>
    </section>
  );
}

export default Banner;
