import { LazyImageType } from "./lazyImageTypes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LazyImage({ src, alt, className, effect = "blur" }: LazyImageType) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      effect={effect}
    />
  );
}

export default LazyImage;
