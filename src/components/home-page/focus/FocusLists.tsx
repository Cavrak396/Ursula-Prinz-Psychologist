import FocusItem from "./FocusItem";
import { focusUtils } from "./utils/focusUtils";

function FocusLists() {
  const [firstGroup, secondGroup] = [
    focusUtils.slice(0, 8),
    focusUtils.slice(8),
  ];

  return (
    <div className="focus__lists">
      {[firstGroup, secondGroup].map((group, groupIndex) => (
        <ul key={groupIndex} className="focus__list">
          {group.map((item, itemIndex) => (
            <FocusItem key={itemIndex} item={item} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export default FocusLists;
