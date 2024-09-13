import { Children } from "react";

interface IButton {
    text: any,
    type: "submit" | "reset" | "button" | undefined,
    disabled?: boolean,
    onClick?: () => void
}
const Button = ({text, onClick, type, disabled}: IButton) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;