import React from 'react';

import { Header, SidebarLink, Menu } from './styles';

class Sidebar extends React.Component {
  render () {
    return (
      <Header>
        <SidebarLink to="/">
          <h2>Gestão de produtos</h2>
        </SidebarLink>
        <Menu>
          <SidebarLink to="/produtos">Produtos</SidebarLink>
          <SidebarLink to="/historico">Histórico</SidebarLink>
          <SidebarLink to="/Sair">Sair</SidebarLink>
        </Menu>
      </Header>
    );
  }
}

export default Sidebar;