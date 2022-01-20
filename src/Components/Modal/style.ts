import styled, { keyframes } from "styled-components";

const Pop = keyframes`
0%{transform:scale(0)}
50%{transform:scale(1.5)}
100%{transform:scale(1)}
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  @media (min-width: 800px) {
    justify-content: center;
    margin: 0px;
  }
`;

export const DivA = styled.div`
  position: fixed;
  background-color: rgba(51, 51, 51, 0.5);
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  z-index:10;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 30px;
  width: 400px;
  min-width: 200px;
  animation: ${Pop} 1s;
  span {
    text-align: right;
    font-size: 20px;
  }
`;