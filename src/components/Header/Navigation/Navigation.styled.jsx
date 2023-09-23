import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
  
`;

export const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  top: 77px;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  background: #0a0a11;
  transform: translateX(100%);
  animation: ${props => (props.closing ? slideOut : slideIn)} 0.8s
    cubic-bezier(0.42, 0, 0.58, 1) forwards;

  @media (min-width: 768px) {
    top: 84px;
  }

  @media (min-width: 1024px) {
    position: static;
    display: block;
    margin-right: auto;
    margin-left: auto;
    transform: translateX(0);
  }
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20% auto 0 auto;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin: 0;
  }
`;

export const Item = styled.li``;
export const NavigationLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) border 0.3s
    cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    background: var(--accent-color);
    border-color: transparent;
  }
`;
