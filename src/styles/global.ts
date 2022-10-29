import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  font-size: 1rem;
}


body, span, button, input, textarea {
  font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
}
`;
