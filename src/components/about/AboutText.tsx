import { AboutTypesItem } from "./types/aboutTypes";

function AboutText({ item }: AboutTypesItem) {
  return (
    <p className="about__lines">
      {item.text}
    </p>
  );
}

export default AboutText;
