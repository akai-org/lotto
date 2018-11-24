import React from "react";
import styled from "react-emotion";

import Menu from "./Menu";

import burger from "../assets/burger.svg";
import cross from "../assets/cross.svg";
import star from "../assets/star.svg";

const Nav = styled('nav')`
  background: ${props => props.theme.color.accent.primary.base};
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const MenuIcon = ({ onClick }) => (
  <a onClick={onClick}><img src={burger} width="25" height="25" alt="Show menu" /></a>
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
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { showMenu: false };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  render() {
    return (<>
      <Nav>
        <MenuIcon onClick={this.showMenu}></MenuIcon>
        <StarCount>{this.props.stars}</StarCount>
      </Nav>
      <Menu isVisible={this.state.showMenu} onClose={this.hideMenu} />
    </>);
  }

  showMenu() {
    this.setState({ showMenu: true });
  }

  hideMenu() {
    this.setState({ showMenu: false });
  }
}

export default Navbar;
