import AboutImage from "../../../assets/images/about/ursula-prinz-about.webp";
import LazyImage from "../../reusable/lazyLoadingImage/LazyImage";

function AboutPhoto() {
  return (
    <div className="about__photo">
      <LazyImage src={AboutImage} className="about__image" alt="about image" />
    </div>
  );
}

export default AboutPhoto;
