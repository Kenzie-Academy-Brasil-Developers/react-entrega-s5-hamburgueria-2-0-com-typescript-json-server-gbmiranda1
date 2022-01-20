import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.color ? "#219653" : "#F5F5F5"};
    color:  ${props => props.color ? "#fff" : "#999999"};
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 0px;
    margin: 0px 0px 0px 0px;
    cursor: pointer;
`;