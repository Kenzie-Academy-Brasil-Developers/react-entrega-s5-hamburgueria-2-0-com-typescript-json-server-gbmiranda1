import styled from "styled-components";

export const HeaderContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    background: #F5F5F5;
    padding: 10px 20px;

    svg{
        color: #BDBDBD;
        width: 20px;
        height: 20px;
    }
`
export const DivIcons = styled.div`
    display:flex;
    align-items:center;
    svg {
        margin-left: 10px;
    }
    @media screen and (min-width: 1000px){
        .search{
            display: none;
        }
    }
`

export const Container = styled.div`
`
export const HeaderProduct = styled.div`
padding: 0px 20px;
`

export const Product = styled.div`
    display: flex;
    overflow:scroll;
    width: 100%;
    @media screen and (min-width: 1000px) {
    
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;
        margin-bottom: 10px;
    }
`

export const HeaderPesquisa = styled.div`
    padding: 10px;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: #FFFFFF;
    width: 100%;
    max-width:300px;
    margin:auto;
    input{
        background-color: transparent;
        border: 0px;
        height: 35px;
        margin-right: 5px;
        width: 100%;
    }
    input::placeholder{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #E0E0E0;
    }
    button{
        background-color: #27AE60;
        border: 0px;
        width: 53px;
        height: 40px;
        border-radius: 8px;
        color: #FFFFFF
        width: 100%;
        svg{
            color: #FFFFFF;
        }
    }
    button:hover{
        filter: brightness(110%);
        cursor: pointer;
    }

    @media screen and (min-width: 1000px){
        min-width: 343px;
        margin-bottom: 0px;
    }
`

export const HeaderOpen = styled.div`
    padding: 10px;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    display: none;
    justify-content: center;
    align-items:center;
    background-color: #FFFFFF;
    width: 100%;
    max-width:300px;
    margin:auto;
    input{
        background-color: transparent;
        border: 0px;
        height: 35px;
        width: 100%;
    }
    input::placeholder{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #E0E0E0;
    }
    button{
        background-color: #27AE60;
        border: 0px;
        width: 53px;
        height: 40px;
        border-radius: 8px;
        color: #FFFFFF;
        svg{
            color: #FFFFFF;
            margin: 0;
        }
    }
    button:hover{
        filter: brightness(110%);
        cursor: pointer;
    }

    @media screen and (min-width: 1000px){
        min-width: 343px;
        margin-bottom: 0px;
        display: flex;
        .search{
            display: none;
        }
    }
`