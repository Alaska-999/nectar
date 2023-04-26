import React from 'react';
import styled from "styled-components";
import home from '/public/assets/icons/navigation/home.svg'
import explore from '/public/assets/icons/navigation/explore.svg'
import fav from '/public/assets/icons/navigation/fav.svg'
import cart from '/public/assets/icons/navigation/cart.svg'
import user from '/public/assets/icons/navigation/user.svg'
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <NavBar>
            <Nav activeclassname="active" to='/'>
                <Icon icon={home}/>
                Головна
            </Nav>
            <Nav activeclassname="active" to='/explore'>
                <Icon icon={explore}/>
                Категорії
            </Nav>
            <Nav activeclassname="active" to='/cart'>
                <Icon icon={cart}/>
                Корзина
            </Nav>
            <Nav activeclassname="active" to='/favourites'>
                <Icon icon={fav}/>
                Вибране
            </Nav>
            <Nav activeclassname="active" to='/account'>
                <Icon icon={user}/>
                Акаунт
            </Nav>
        </NavBar>
    );
};

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 17px 30px 30px;
  z-index: 100;
`

const Icon = styled.div<{ icon: string}>`
  width: 24px;
  height: 24px;
  margin: 0 auto;

  ::after {
    content: url(${props => props.icon});
    width: 24px;
    height: 24px;
    fill: black;
    filter: brightness(0) saturate(0);
  }
`
const Nav = styled(NavLink)<{ icon?: string, activeclassname?: string }>`
  font-size: 12px;
  font-family: 'Roboto-Medium', sans-serif;
  color: black;
  text-decoration: none;

  &.${props => props.activeclassname} {
    color: var(--green);

    div${Icon} {
      ::after {
        filter: hue-rotate(124deg) brightness(100%);
      }
    }
  }
}
`;

export default Navigation;