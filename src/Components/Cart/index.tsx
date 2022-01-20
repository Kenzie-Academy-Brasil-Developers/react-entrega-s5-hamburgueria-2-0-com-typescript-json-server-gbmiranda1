import {useCart} from "../../Contexts/Cart/CartContext" 
import Buttons from "../Button";
import ItemCart from "../ItemCart";
import { IoClose } from "react-icons/io5";

import { Container, Carrinho, TitleCart, ItemCartE, ContainerPrice, ContainerP } from "./style";
interface CartProps{
    close: ()=>void;
}
function Cart({close}:CartProps) {
    const {cart, deleteProduct, deleteAll} = useCart();

    const valorTotalCarrinho = cart.reduce(function (acumulador, valorAtual) {
        return acumulador + (valorAtual.quantidade*Number(valorAtual.price));
    }, 0);

    const removeAll = () =>{
        deleteAll()
    }
    

    return(
        <Container className="carrinho-container">
            <Carrinho className="carrinho">
                <TitleCart className="title-carrinho">
                    <h1>Carrinho de compras</h1>
                    <IoClose onClick={close}/>
                </TitleCart>

                <div>
                    {cart.length === 0 ?
                        <ItemCartE className="itens-carrinho-vazio">
                            <h2>Sua sacola está vazia</h2>
                            <span>Adicione itens</span>
                        </ItemCartE>
                        :
                        <div>
                                  {
                          cart.map((item) => (
                                    <ItemCart  key={item.id} product={item} />
                                ))
                            }
                        </div>
                    }
                </div>
                {cart.length !== 0 &&
                <ContainerPrice>
                    <ContainerP>
                        <span className="total">Total</span>
                        <span className="price-total">R$ {(valorTotalCarrinho.toFixed(2)).toString().replace(".", ",")}</span>
                    </ContainerP>
                    <Buttons onClick={removeAll} className="width-maxima" text="Remover todos"></Buttons>
                </ContainerPrice>
                }
            </Carrinho>
        </Container>
    )
}

export default Cart;