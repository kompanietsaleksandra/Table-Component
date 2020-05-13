import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const AppStyle = styled.div`
    text-align: center;
    margin: 7px;
        max-height: 700px;
    overflow: auto;
    border: 3px solid rgba(107,89,86,0.39);
    border-radius: 10px;
`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

ReactDOM.render(
  <React.StrictMode>
      <AppStyle>
    <App />
      </AppStyle>
      <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
