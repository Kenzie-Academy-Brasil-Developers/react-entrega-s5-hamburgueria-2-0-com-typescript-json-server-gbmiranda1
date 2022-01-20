import { ButtonHTMLAttributes } from "react"
import {Button} from "./style"

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    color?: string;
}

function Buttons ({text, color, onClick, type}: ButtonsProps){

    return(
        <Button type={type} onClick={onClick} color={color} >{text}</Button>
    )

}

export default Buttons