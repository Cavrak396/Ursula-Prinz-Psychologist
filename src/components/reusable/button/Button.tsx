import { ButtonType } from "./buttonTypes";
import "./button.css";

function Button({ type, className, children }: ButtonType) {
    return (
        <button type={type} className={className}> {children} </button>
    )
}

export default Button;