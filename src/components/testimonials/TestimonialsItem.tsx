import { TestimonialItemType } from "./types/testimonialsTypes";

function TestimonialsItem({ item }: TestimonialItemType) {
  return <li className="testimonials__list-item">"{item.text}"</li>;
}

export default TestimonialsItem;