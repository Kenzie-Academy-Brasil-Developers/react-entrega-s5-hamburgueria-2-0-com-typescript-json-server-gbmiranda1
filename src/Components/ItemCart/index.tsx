import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../Contexts/Cart/CartContext";
import { Button, ButtonQtd, Container, ContainerDetalhes, ContainerQuantidade } from "./style";

interface Product{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    quantidade:number;
    userId:number;
}
interface CartItemProps{
    product: Product;
}

function ItemCart({product}:CartItemProps) {
    const {addQuantidade, subQuantidade, deleteProduct} = useCart()
    


    return (
        <div>
            <Container>
                <img src={product.img} alt="" />
                <ContainerDetalhes>
                    <h2>{product.name}</h2>
                    <ContainerQuantidade>
                            <ButtonQtd onClick={()=>addQuantidade(product)}>+</ButtonQtd>
                            <span>{product.quantidade}</span>
                            <ButtonQtd onClick={()=>subQuantidade(product)}>-</ButtonQtd>     
                    </ContainerQuantidade>

                </ContainerDetalhes>

                <Button><FaTrash onClick={()=>deleteProduct(product)}/></Button>
            </Container>
        </div>
    );
}

export default ItemCart;