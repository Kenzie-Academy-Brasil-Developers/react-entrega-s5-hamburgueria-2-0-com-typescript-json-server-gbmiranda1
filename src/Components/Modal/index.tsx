import { ReactNode } from "react";
import { Div, DivA, DivContainer } from "./style";

interface ModalProps {
  children: ReactNode;
}

function Modal({children}:ModalProps){
    return(
        <DivA>
            <DivContainer>
                <Div>
                    {children}
                </Div>
            </DivContainer>
        </DivA>
    )
}
export default Modal;