import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    max-width: 442px;
    margin-bottom: 30px;
    svg{
        width: 20px;
        height: 20px;
        color: #219653;
    }
    p{
        font-family: 'Inter', sans-serif;
        margin: 0;
        font-size: 12px;
        margin-top: 5px;
        color: #828282;
        span{
            font-weight:bold; 
            color: black;
        }
    }
`;

export const Icon = styled.div`
    min-width: 60px;
    max-width: 60px;
    height: 60px;
    background: rgba(39, 174, 96, 0.1);
    margin-right: 10px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
`
export const Container = styled.div`
    padding: 20px 10px 20px 10px;
    display: flex;
    flex-direction:column;
    align-items:center;
    height: 100vh;
    .form{
        width: 100%;
        display: flex;
        justify-content:center;
    }
    @media(min-width:1000px){
        flex-direction:row;
        justify-content:center;
        padding:0px;
        .header{
            order:2;
        }
        .form{
            order:1;
            margin-right:40px;
            display: block;
            max-width:442px;;
        }
    }
`
export const Image = styled.img`
    margin-top: 30px;
    display: none;
    @media(min-width:1000px){
        display: block;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 19px 26px 19px;
    box-sizing:border-box;
    margin-top: 20px;
    width: 100%;
    max-width:442px;
    background: #FFFFFF;
    border: 2px solid #F5F5F5;
    box-sizing: border-box;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    @media(min-width:1000px){
        width:442px;
    }
`;

export const Span = styled.span`
    font-size: 12px;
    color: #999999;
    margin-top: 10px;
    max-width: 200px;
    text-align:center;
`;
export const SpanH = styled(Span)`
    margin: 0px;
    color: black;
`;

export const Circle = styled.div`
    width: 10.9px;
    height: 10.9px;
    background: #F2F2F2;
    margin-right:23.4px;
    margin-bottom:23.4px;
    border-radius:100%;
    &:hover{
        background: #27AE60;
    }
`;
export const ContainerCircle = styled.div`
    display: flex;
`;


export const Error = styled.ul`
    margin: 0px;
    text-align: start;
    margin-bottom: 15px;
    font-size: 10px;
    color: rgb(240, 42, 42);
    padding: 0px 0px 0px 5px;
    
    li{
        list-style: inside;
    }
`;

export const DivSpan = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

export const SpanLogin = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    margin-bottom: 20px;
`;