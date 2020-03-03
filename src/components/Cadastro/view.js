import React from 'react';

import { Container, Title } from './styles';

class Cadastro extends React.Component {
  limparFormulario(){
    document.querySelector('form').reset();
  }

  buscarCep(){
    
  }

  cadastrarUsuario(){
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "https://www.google.com/", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var idade = document.getElementById("idade").value;
    var sexo = document.querySelectorAll('input[type=radio]:checked');
    if (sexo.length !== 0) {
      sexo = sexo[0];
    } else {
      sexo = ""
    }
    var cep = document.getElementById("cep").value;
    var numero = document.getElementById("numero").value;
    var complemento = document.getElementById("complemento").value;

    if (senha !== confirmarSenha) {
      alert("A senha deve ser igual à do campo confirmar senha!");
      return
    }
 
    var data = {
      'login': login, 
      'senha': senha, 
      'nome': nome, 
      'dataNasc': dataNascimento, 
      'idade': idade, 
      'sexo': sexo, 
      'cep': cep, 
      'numero': numero, 
      'complemento': complemento
    };

    ajax.send(data);

    ajax.onreadystatechange = function() {
      var data = ajax.responseText;
      console.log(data);
      window.location.href = "http://localhost:3000/produtos" 
    }
  }
  calcularIdade (){
    var data = document.getElementById("dataNascimento").value
    var ano = parseInt(data.substring(0, 4))
    document.getElementById("idade").value = 2019 - ano
  }
  render() {
    return (
      <Container>
        <Title>Cadastro de Usuário</Title>
        <form className="formCadastro">
          <div className="cadastro">
            <label htmlFor="login">Login: <input id="login" required/></label><br/>
            <label htmlFor="senha">Senha: <input id="senha" type="password" required/></label><br/>
            <label htmlFor="confirmarSenha">Confirmar senha: <input id="confirmarSenha" type="password" required/></label><br/>
            <h3>Dados Pessoais:</h3>
            <label htmlFor="nome">Nome: </label><input id="nome" required/><br/>
            <label htmlFor="dataNascimento">Data de nascimento: <input id="dataNascimento" type="date" onBlur={this.calcularIdade} required/></label><br/>
            <label>Idade: <input id="idade"/></label><br/>
            <label htmlFor="sexo">
              Sexo: 
              <input type="radio" id="sexoHomem" name="sexo" value="homem"/> Homem 
              <input type="radio" id="sexoMulher" name="sexo" value="mulher"/> Mulher 
              <input type="radio" id="sexoOutro" name="sexo" value="outro"/> Outro 
            </label><br/>
          </div>
          <div className="endereco">
            <label htmlFor="cep">CEP: <input id="cep" required/><input type="button" value="Buscar CEP" onClick={this.limparFormulario}/></label><br/>
            <label htmlFor="logradouro">Logradouro: <input id="logradouro"/></label><br/>
            <label htmlFor="numero">Número: <input id="numero"/></label><br/>
            <label htmlFor="complemento">Complemento: <input id="complemento"/></label><br/>
            <label htmlFor="cidade">Cidade: <input id="cidade"></input></label>
            <label htmlFor="uf">UF: 
              <select id="uf">
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espirito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MT">Mato Grosso</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </label><br/>
            <label>
              <input type="button" value="Criar Usuário" onClick={this.cadastrarUsuario}/>
              <input type="button" value="Limpar" onClick={this.limparFormulario}/>
            </label>
            
          </div>

        </form>
      </Container>
    );
  }
  
}

export default Cadastro;
