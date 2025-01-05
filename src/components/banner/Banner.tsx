import BannerText from "./BannerText";
import "./banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="wrap">
        <div className="banner__text-holder">
          <BannerText />
        </div>
      </div>
    </section>
  );
}

export default Banner;
