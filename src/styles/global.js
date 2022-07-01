import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    border: 0;
    list-style: none;
}
:root{
    --color-background: #000;
    --color-text:#fff;
}
html{
    overflow: unset;
}
body, input, button, textarea{
    font-family: 'Hind', sans-serif;
    font-size: 1rem;
    color: var(--color-text)
}
h1, h2, h3, h4, h5, h6{
    font-family: 'Baloo Chettan 2', cursive;
    font-weight: 700;
}
button{
    cursor: pointer;
}

`;
