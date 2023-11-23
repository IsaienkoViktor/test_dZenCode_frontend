import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
  position: relative;
  min-height: 100vh;  
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #000000;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    color: blue;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  display: block;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  padding: 0;
  border: none;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
`;
