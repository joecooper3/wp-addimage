import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Arimo:400,700');

body {
    margin: 0;
    padding: 0;
    background-color: #f7e5d6;
    font-family: 'Arimo', sans-serif;
}

:focus {
    outline: #0c3cb4 auto 3px;
}
`;
