import Header from "../../Components/Header";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Div, Icon, Container, Form, Span, SpanH, Error, Image, DivSpan, SpanLogin} from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {TextField} from "@mui/material"
import { useHistory, Redirect}  from 'react-router-dom'
import Buttons from "../../Components/Button";
import circleh from "../../assets/circle-header.svg"
import { useAuth } from "../../Contexts/Auth/AuthContext";
import { api } from "../../Services/api";
import { useCart } from "../../Contexts/Cart/CartContext";

interface SignInCredentials {
    email: string;
    password: string;
  }

function Login({}) {
    const history = useHistory();
    const {signIn} = useAuth();
    const {refresh,setRefresh} = useCart();

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    })

    const { register, 
            handleSubmit, 
            formState: { errors },
    } = useForm<SignInCredentials>({
        resolver:yupResolver(formSchema),
    })


    const onSubmitFunction = ( data: SignInCredentials) => {
        signIn(data)
        setTimeout(function() {
            window.location.reload();
        }, 500);
        setRefresh(!refresh)
    }




    return(
        <Container>
            <div className="header">
                <Header></Header>
                <Div>
                    <Icon>
                        <RiShoppingBag3Line/>
                    </Icon>
                    <div>
                        <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>   
                    </div>
                </Div>
                <Image src={circleh} alt="" />
            </div>
            <div className="form">         
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <SpanLogin>Login</SpanLogin>
                    <TextField fullWidth id="login-basic" label="E-mail" variant="outlined" {...register("email")}/>
                    <Error>
                        { errors.email?.message &&
                        <span>
                            {errors.email?.message}
                        </span>
                        }
                    </Error>
                    <TextField fullWidth type="password" id="password-basic" label="Password" variant="outlined" {...register("password")}/>
                    <Error>
                        {
                            errors.email?.message &&
                        <span>
                            {errors.password?.message}
                        </span>
                        }
                    </Error>
                    <Buttons text={"Logar"} color="true">Logar</Buttons>
                    <DivSpan>
                        <Span>Crie sua conta para saborear muitas delícias e matar sua fome!</Span>
                    </DivSpan>
                    <Buttons type="submit" onClick={() => history.push("/signup")} text={"Cadastre-se"}></Buttons>
                </Form>
            </div>
        </Container>
    )
}

export default Login;