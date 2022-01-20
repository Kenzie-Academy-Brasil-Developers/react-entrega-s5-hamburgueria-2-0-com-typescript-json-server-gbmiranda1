import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items:center;
    padding: 10px;
    background-color: #F5F5F5;
    img{
        max-height: 90px;
        background-color: #ebe7e7;
    }
`

export const ContainerDetalhes = styled.div`
    margin: 0px 6px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    height:90px;
    h2{
        margin-top: 6px;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 0px;
        color: #333333;
    }
`

export const ContainerQuantidade = styled.div`
    display: flex;
    align-items:center;
    border: 2px solid #F2F2F2;
    margin-top: 10px;
    span{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 16px;
        color: #000000;
        background: #fff;
        padding: 3px 10px;
    }
`

export const Button = styled.button`
    height: 90px;
    border: 0px;
    margin-left: auto;
    background: transparent;
    display: flex;
    align-items:start;
    svg:hover{
        color: black;
    }
    svg{
        color:#BDBDBD;
    }
`

export const ButtonQtd = styled.button`
    border: 2px solid #F2F2F2;
    margin-top: 0px;
    padding: 3px 4px;
    color: #EB5757;
`
