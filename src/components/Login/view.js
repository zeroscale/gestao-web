import React from 'react';

import { Container, Title } from './styles';

class Login extends React.Component {
  logar(){
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "https://www.google.com/", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var data = {'login': login, 'senha': senha};

    ajax.send(data);

    ajax.onreadystatechange = function() {
      var data = ajax.responseText;
      localStorage.setItem("id", "data.id");
      console.log(data);
      window.location.href = "http://localhost:3000/produtos" 
    }
  }

  render() {
  return (
    <Container>
      <Title>Login</Title>
      <form>
        <div className="login">
          <label htmlFor="login">Login:</label><br/>
          <input id="login" required/><br/>
          <label htmlFor="senha">Senha: </label><br/>
          <input id="senha" type="password" required/><br/>
          <label><input type="button" value="Logar" onClick={this.logar}/></label><br/>
          <a href="cadastro"> Criar usuário</a>
        </div>
      </form>
    </Container>
  );
}
}
export default Login;