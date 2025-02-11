import FocusLists from "./FocusLists";

function FocusContent() {
  return (
    <div className="focus__content">
      <p className="focus__introduction classic-text">
        Psychotherapie eignet sich als Behandlung unter anderem bei:
      </p>
      <FocusLists />
    </div>
  );
}

export default FocusContent;
