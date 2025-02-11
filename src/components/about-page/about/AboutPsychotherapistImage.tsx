import LazyImage from "../../reusable/lazyLoadingImage/LazyImage";
import psychotherapistImage from "../../../assets/images/about-page/about-psychoterapist/ursula-prinz-about-page-psychoteparist.png";

function AboutPsychotherapistImage() {
  return (
    <div className="about__psychotherapist-image-holder">
      <LazyImage
        src={psychotherapistImage}
        className="about__psychotherapist-image"
        alt="psychotherapist image"
      />
    </div>
  );
}

export default AboutPsychotherapistImage;
