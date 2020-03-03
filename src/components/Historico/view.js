import React from 'react';

import { Container } from './styles';

import Sidebar from '../SideBar/view';
class Historico extends React.Component {
  constructor(props) {
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "https://www.google.com/", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    ajax.send();

    ajax.onreadystatechange = function() {
      var data = ajax.responseText;
      console.log(data);
    }
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       produtos: [
          { id: 1, usuario: 'Wasif', dataSolicitacao: '10m', produto: '10.00', quantidade: 10, valorTotal: '532.21' },
          { id: 2, usuario: 'Gartic', dataSolicitacao: '1kg', produto: '15.00', quantidade: 10, valorTotal: '532.21' },
          { id: 3, usuario: 'Astrid', dataSolicitacao: '4L', produto: '20.00', quantidade: 10, valorTotal: '532.21' },
          { id: 4, usuario: 'Gender', dataSolicitacao: '50cm', produto: '25.00', quantidade: 10, valorTotal: '532.21' },
         ]
      }
   }

  gerarTabela(){
    return this.state.produtos.map((produtos, index) => {
      const { id, usuario, dataSolicitacao, produto, quantidade, valorTotal} = produtos
      return (
         <tr key={id}>
          <td className="usuario">{usuario}</td>
          <td className="data">{dataSolicitacao}</td>
          <td className="produto">{produto}</td>
          <td className="quantidade">{quantidade}</td>
          <td className="valorTotal">{valorTotal}</td>
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
              <th>Usuário</th>
              <th>Data</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Custo Total</th>
            </tr>
          </thead>
          <tbody>
            {this.gerarTabela()}
          </tbody>
        </table>
      </Container>
    );
  }
}


export default Historico;