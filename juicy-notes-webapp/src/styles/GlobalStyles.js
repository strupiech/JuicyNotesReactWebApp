import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    color: black;
    font-size: 1.2em;
    background-color: #fffcd5;
    font-family: 'Comfortaa', cursive;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
`;

export const Main = styled.div`
    min-height: calc(100vh - (125px + 60px));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: ${props => props.fontSize};


    ${props => props.type === 'text' && css`
        border: none;
        border-radius: 10px;
        color: grey;
        outline: 0;
        background-color: #fffcd5;
        margin-left: 10px;
        margin-right: 10px;

        display: flex;
        text-align: center;
    `}

    ${props => props.type === 'submit' && css`

        background-color: ${props => props.bgColor};
        color: white;
        border: none;
        border-radius: 10px;
        outline: 0;

        &:hover {
            background-color: #1E4C48;
        }
    `}

    ${props => props.type === 'password' && css`
        border: none;
        border-radius: 10px;
        color: grey;
        outline: 0;
        background-color: #fffcd5;
        margin-left: 10px;
        margin-right: 10px;

        display: flex;
        text-align: center;
    `}

    
    ${props => props.type === 'button' && css`

        background-color: ${props => props.bgColor};
        color: white;
        border: none;
        border-radius: 10px;
        outline: 0;

        &:hover {
            background-color: #1E4C48;
        }
    `}



`;