import { ButtonType } from "./buttonTypes";

function Button({ type, uniqueClass, children }: ButtonType) {
    return (
        <button type={type} className={uniqueClass}> {children} </button>
    )
}

export default Button;