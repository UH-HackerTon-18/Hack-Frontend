import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

input {
  border: none;
	outline: none;
}

`;

export default GlobalStyle;
