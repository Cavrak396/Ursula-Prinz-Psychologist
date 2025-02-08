import { ResponsibleDetailsItemType } from "./types/responsibleTypes";

function ResponsibleDetailsItem({ item }: ResponsibleDetailsItemType) {
  return (
    <li className="responsible__details-item">
      <span className="responsible__details-tag">{item.tag}</span>
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          className="responsible__details-text"
          rel="noopener noreferrer"
        >
          {item.text}
        </a>
      ) : (
        <span className="responsible__details-text">{item.text}</span>
      )}
    </li>
  );
}

export default ResponsibleDetailsItem;
