import TestimonialsItem from "./TestimonialsItem";
import { testimonials } from "./utils/testimonialsUtils";

function TestimonialsList() {
  return (
    <ul className="testimonials__list">
      {testimonials.map((item) => {
        return <TestimonialsItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default TestimonialsList;