import React, { useState } from "react";
import styled from "react-emotion";

import Menu from "./Menu";

import burger from "../assets/burger.svg";
import star from "../assets/star.svg";

const Header = styled('header')`
  background: ${props => props.theme.color.accent.primary.base};
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const MenuIcon = ({ onClick }) => (
  <a onClick={onClick}><img src={burger} width="25" height="25" alt="Pokaż menu" /></a>
);

const StarCount = styled('div')`
  position: relative;
  font-weight: 700;
  &::before {
    content: url(${star});
    position: absolute;
    width: 20px;
    height: 20px;
    left: -24px;
  }
`

function Navbar({ stars }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const showMenu = () => setMenuVisibility(true);
  const hideMenu = () => setMenuVisibility(false);

  return (
    <>
      <Header>
        <MenuIcon onClick={showMenu}></MenuIcon>
        <StarCount>{stars}</StarCount>
      </Header>
      <Menu isVisible={menuVisibility} onClose={hideMenu} />
    </>
  );
}

export default Navbar;
