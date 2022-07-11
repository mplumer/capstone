import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ToyLogo } from '../../assets/logo.svg';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 5px;
`;

export const Logo = styled(ToyLogo)`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const LogoTextContainer = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: '', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: rgb(35, 219, 216);
`;

export const LogoText = styled.div`
  margin-left: 10px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
