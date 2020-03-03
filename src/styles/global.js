import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
    html,
    body,
    #root {
      height: 100%;
    }
    body {
      width: 100%;
      text-rendering: optimizeLegibility !important;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      background: #DAD4B2;
    }
    table {
      width: 80%;
      margin-top: 6%;
      text-align: center;
    }
    menu {
      display: flex;
      flex-direction: line;
    }
    .solicitado {
      width: 50%;S
    }
    th, td {
      padding: 8px;
      border-spacing: 0px;
      border-collapse: collapse;
      border-bottom: 2px solid #c9c4a3;
    }
    .login {
      display: flex;
      flex-direction: column;
      height: 50%;
    }
    .formCadastro {
      padding-top: 10%;
      width: 50%;
      height: 600px;
      display: flex;
      flex-direction: line;
      justify-content: space-between;
    }
    .cadastro, .endereco {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    } 
    
`;