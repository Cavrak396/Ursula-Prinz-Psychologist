import LazyImage from "../reusable/lazyLoadingImage/LazyImage";
import psychotherapistImage from "../../assets/images/about-page/about-psychoterapist/ursula-prinz-about-page-psychoteparist.png";

function AboutPagePsychotherapistImage() {
  return (
    <div className="about-page__psychotherapist-image-holder">
      <LazyImage
        src={psychotherapistImage}
        className="about-page__psychotherapist-image"
        alt="psychotherapist image"
      />
    </div>
  );
}

export default AboutPagePsychotherapistImage;
