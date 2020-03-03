import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Produtos from '../components/Produtos/view';
import Historico from '../components/Historico/view';
import Login from '../components/Login/view';
import Cadastro from '../components/Cadastro/view';
import Sair from '../components/Sair/view';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/produtos" exact component={Produtos} />
      <Route path="/historico" exact component={Historico} />
      <Route path="/login" exact component={Login} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/sair" exact component={Sair} />
    </Switch>
  );
}