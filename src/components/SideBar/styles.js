import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.aside`
  display: flex;
  flex-direction: roll;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
`;

export const Menu = styled.aside`
  display: flex;
  flex-direction: roll;
  justify-content: flex-end;
  align-items: center;
`;

export const SidebarLink = styled(NavLink)`
  padding: 10%;
  text-align: center;
  text-decoration: none;
  color: #200808;

  &:hover {
    color: white;
  }
`;