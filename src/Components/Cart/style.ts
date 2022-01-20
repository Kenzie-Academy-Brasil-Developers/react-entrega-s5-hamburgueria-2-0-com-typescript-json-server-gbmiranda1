import styled from "styled-components";

export const Container = styled.div`
`

export const Carrinho = styled.div`
    margin: 20px 21px;
    border-radius: 10px 10px 5px 5px;
    background-color: #F5F5F5;
    border-bottom: 2px solid #E0E0E0;
    min-width: 300px;
    @media screen and (min-width: 1000px) {
        min-width: 365px;
    }
`

export const TitleCart = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    color: white;
    background-color: #27AE60;
    border-radius: 5px 5px 0px 0px;
    height: 65px;
    padding: 0px 10px;
    h1{
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
    }
    svg{
        align-self:center;
        width: 30px;
        height: 30px;
        margin-top: 3px;
    }

`

export const ContainerPrice = styled.div`
 padding: 10px;
 button{
    background: #E0E0E0;
 }

`

export const ItemCartE = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 158px;
    h2{
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #333333;
    }
    span{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #828282;
    }
`

export const ContainerP = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #E0E0E0;;
    padding: 2px;
    margin-bottom: 5px;
    span{
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 24px;
        color: #333333;
    }
    .price-total{
        color: #828282;
    }
`
