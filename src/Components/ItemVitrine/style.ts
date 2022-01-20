import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    min-width: 280px;
    margin: 29px 10px 0px 0px;
`

export const ItemImg = styled.div`
    display: flex;
    justify-content: center;
    background-color: #F5F5F5;
    img{width: 157px;}
`


export const ItemDetalhes = styled.div`
    padding: 21px;
    display: flex;
    flex-direction: column;
    h2{
        margin-bottom: 30px;
    }
    .espacamento{
        margin-bottom: 30px;
    }

    .itemVitrine-price{
        color: #27AE60;
        font-weight: bold;
    }
    button{
        color: #fff;
        background: #BDBDBD;
    }
    button:hover{
        background: #27AE60;
        color: #fff;
    }
`

