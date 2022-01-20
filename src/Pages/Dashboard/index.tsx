import { FaSearch } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Header from "../../Components/Header";
import { useEffect, useState } from "react";
import { DivIcons, HeaderContainer, HeaderOpen, HeaderPesquisa, Product, Container, HeaderProduct } from "./style";
import { api } from "../../Services/api";
import ItemVitrine from "../../Components/ItemVitrine";
import Modal from "../../Components/Modal";
import Cart from "../../Components/Cart";
import { useCart } from "../../Contexts/Cart/CartContext";
import { useAuth } from "../../Contexts/Auth/AuthContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      background: "#27AE60"
    },
  }));

interface Product{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}
interface Products{
    product: Products[]
}

function Dashboard() {
    const [openSearch, setOpenSearch] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [product, setProduct] = useState<Product[]>([])
    const [input, setInput] = useState("")
    const [refresh, setRefresh] = useState(false)
    const {cart} = useCart();
    const {signOut} = useAuth();
    const [filteredProducts,setFilteredProducts] = useState<Product[]>([]);

    const open = () =>{
        setOpenSearch(true)
    }
    function filtrarProducts(text:string) {
        setInput(text)
        setFilteredProducts(product.filter((item) => {
            return ((item.name).toLowerCase().indexOf(text.toLowerCase()) > -1 || (item.category).toLowerCase().indexOf(text.toLowerCase()) > -1) && item.name
        }));
    }
    

    function filteredExit(){
        setFilteredProducts([])
    }

    const close = () =>{
        setOpenSearch(false)
        setInput("")
    }
    const openCartFunction = () =>{
        setOpenCart(true)
    }
    const closeCart = () =>{
        setOpenCart(false)
    }
    useEffect(()=>{
        api
        .get("/products")
        .then((response) => {
            setProduct(response.data)
        })
        .catch((err) => {
            //onModalErrorOpen();
        });
    }, [refresh])
    return(
        <Container>
        <HeaderContainer>
            {
            openSearch ?
                <HeaderPesquisa className="header-pesquisa">
                    <input type="text"
                        placeholder="Digitar Pesquisa"
                        value={input}
                        onChange={(event) => filtrarProducts(event.target.value)}
                        />
                    <button type="submit" onClick={close}><FaSearch/></button>
                </HeaderPesquisa>
            :
            <>
                <Header></Header>
                <DivIcons>
                    <HeaderOpen className="header-pesquisa">
                        <input type="text"
                            placeholder="Digitar Pesquisa"
                            value={input}
                            onChange={(event) => filtrarProducts(event.target.value)}
                            />
                        <button type="submit" onClick={() => setInput("")}><FaSearch/></button>
                    </HeaderOpen>
                    <FaSearch className="search" onClick={open}/>
                    <StyledBadge onClick={openCartFunction} badgeContent={cart.length} color="secondary">
                            <HiShoppingCart />
                    </StyledBadge>
                    <MdLogout onClick={signOut}/>
                </DivIcons>
            </>
            }
        </HeaderContainer>
        <HeaderProduct>
            <Product>
                { filteredProducts.length > 0 ?
                    filteredProducts.map((item) =>
                    <ItemVitrine setInput={setInput} filteredExit={filteredExit} key={item.id} product={item} />
                    )
                    :
                    product.map((item) =>
                        <ItemVitrine setInput={setInput} filteredExit={filteredExit} key={item.id} product={item} />
                    )
                }
            </Product>
        </HeaderProduct>
        { openCart &&
            <Modal>
                <Cart close={closeCart}></Cart>
            </Modal>
        }
        </Container>
    )
}
export default Dashboard;