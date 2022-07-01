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
    --color-background: #252422;
    --color-text:#fffcf2;
}
html{
    overflow: unset;
}
body{
    font-family: 'Hind', sans-serif;
    font-size: 1rem;
    background-color: var(--color-background);
    
}
h1, h2, h3, h4, h5, h6{
    font-weight: 700;
    color: var(--color-text)
}
button{
    cursor: pointer;
}

`;
