import { useCart } from "../../Contexts/Cart/CartContext"
import Buttons from "../Button"
import { Container, ItemDetalhes, ItemImg } from "./style"

interface Product{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

interface ItemVitrineProps{
    product: Product;
    filteredExit: ()=>void;
    setInput: (text: string)=>void;
}

function ItemVitrine({ product, filteredExit, setInput }: ItemVitrineProps) {
    const {addProduct} = useCart();

    const add = () =>{
        addProduct(product)
        filteredExit()
        setInput("")
    }

    return (
        <Container className="item">
            <ItemImg className="item-div-img">
                <img className="item-img" src={product.img} alt="" />
            </ItemImg>
            <ItemDetalhes className="item-detalhes">
                <h2>{product.name}</h2>
                <span className="espacamento">{product.category}</span>
                <span className="espacamento itemVitrine-price">{`R$ ${((product.price).toFixed(2)).toString().replace(".", ",")}`}</span>
                <Buttons onClick={add} className="espacamento" text="Adicionar" ></Buttons>
            </ItemDetalhes>
        </Container>
    )
}

export default ItemVitrine