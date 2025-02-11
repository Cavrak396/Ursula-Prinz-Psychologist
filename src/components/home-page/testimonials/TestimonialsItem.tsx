import { TestimonialItemType } from "./types/testimonialsTypes";

function TestimonialsItem({ item }: TestimonialItemType) {
  return (
    <li className="testimonials__list-item">
      <p className="testimonials__list-item-text">{item.text} </p>
      <span className="testimonials__list-item-author">{item.author}</span>
    </li>
  );
}

export default TestimonialsItem;
