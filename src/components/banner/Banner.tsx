import BannerText from "./BannerText";
import Button from "../reusable/button/Button";
import "./banner.css";

function Banner() {
    return (
        <section className="banner">
            <div className="wrap">
                <div className="banner__text-holder">
                    <BannerText />
                    <Button className="banner__button" type="button">Book your consultation.</Button>
                </div>
            </div>
        </section>
    )
}

export default Banner;