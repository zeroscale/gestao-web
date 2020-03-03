import React from 'react';

import { Container, Solicitacoes } from './styles';

import Sidebar from '../SideBar/view';

class Produtos extends React.Component {
  constructor(props) {
    super(props)
    this.solicitar = this.solicitar.bind(this);

    this.state = {
       produtos: [
          { id: 1, nome: 'Wasif', medida: '10m', preco: '10.00', quantidadeDisponivel: 10 },
          { id: 2, nome: 'Gartic', medida: '1kg', preco: '15.00', quantidadeDisponivel: 10 },
          { id: 3, nome: 'Astrid', medida: '4L', preco: '20.00', quantidadeDisponivel: 10 },
          { id: 4, nome: 'Gender', medida: '50cm', preco: '25.00', quantidadeDisponivel: 10 },
         ]
      }
   }
  solicitar = (id) => {
    var linhaSolicitado = document.getElementById(id);

    var table_body = document.getElementById('solicitados');
    var linha = table_body.insertRow(0);
    linha.insertCell(0).innerHTML = linhaSolicitado.cells[0].firstChild.data;
    linha.insertCell(1).innerHTML = linhaSolicitado.cells[2].firstChild.data;
    linha.insertCell(2).innerHTML = linhaSolicitado.cells[3].firstChild.data;
    linha.insertCell(3).innerHTML = '<input></input>';
  }
  cadastrarPedidos(){
    var table_body = document.getElementById('solicitados');
    for (var i = 0; i<table_body.children.length;) {
      var linha = table_body.children[i];
      var request_data = {
        'nome': linha.cells[0].childNodes[0].data,
        'medida': linha.cells[1].childNodes[0].data,
        'preco': linha.cells[2].childNodes[0].data,
        'quantidadeDisponivel': linha.cells[3].childNodes[0].value
      }
      table_body.deleteRow(i);

      var ajax = new XMLHttpRequest();
      ajax.open("POST", "https://www.google.com/", true);
      ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajax.send(request_data);
    }
  }
  deletarTabela(){
    var table_body = document.getElementById('solicitados');
    for (var i = 0; i<table_body.children.length;) {
      table_body.deleteRow(i);
    }
  }
  gerarTabela(){
    return this.state.produtos.map((produtos, index) => {
      const { id, nome, medida, preco, quantidadeDisponivel } = produtos
      return (
         <tr id={id}>
          <td className="nome">{nome}</td>
          <td className="exibirProduto"><a href="url">Exibir produto</a></td>
          <td className="medida">{medida}</td>
          <td className="preco">{preco}</td>
          <td className="quantidadeDisponivel">{quantidadeDisponivel}</td>
          <td className="solicitar"><input type="button" value="Solicitar" onClick={() => this.solicitar(id)} ></input></td>
         </tr>
      )
   })
  }
  render() {
    return (
      <Container>
        <Sidebar />
        <table className="lista">
          <thead>
            <tr>
                <th>Produtos</th>
                <th></th>
                <th>Medida</th>
                <th>Preço</th>
                <th>Quantidade Disponivel</th>
                <th>Solicitar</th>    
            </tr>
          </thead>
          <tbody>
            {this.gerarTabela()}
          </tbody>
        </table>
        <Solicitacoes>
          <table className="solicitado">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Medida</th>
                <th>Preço</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody id="solicitados">
            </tbody>
          </table>
          <menu>
            <input id="salvar" type="button" value="Salvar solicitação" onClick={this.cadastrarPedidos}/>
            <input id="cancelar" type="button" value="Cancelar" onClick={this.deletarTabela}/>
          </menu>
        </Solicitacoes>
      </Container>
    );
  }
}
export default Produtos;