import { ButtonType } from "./buttonTypes";
import "./button.css";

function Button({ type, className, children, onClick }: ButtonType) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
