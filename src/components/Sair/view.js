import React from 'react';

import { Container, Title } from './styles';

class Sair extends React.Component {
  deslogar(){
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "https://www.google.com/", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    ajax.send(localStorage.getItem("id"));

    ajax.onreadystatechange = function() {
      var data = ajax.responseText;
      console.log(data);
      console.log(localStorage.getItem("id"))
      window.location.href = "http://localhost:3000" 
    }
    window.location.href = "http://localhost:3000/produtos"
  }

  render() {
    return (
        <Container>
          <Title>Saindo</Title>
          {this.deslogar()}
        </Container>
    );
}
}
export default Sair;