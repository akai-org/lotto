import React from "react";
import styled from "react-emotion";

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

const MenuIcon = ({ isOpen, setMenuVisibility }) => (
  <div>
    {isOpen
      ? <a href onClick={ () => setMenuVisibility(false) }><img src={cross} width="25" height="25" alt="Ukryj menu" /></a>
      : <a href onClick={ () => setMenuVisibility(true) }><img src={burger} width="25" height="25" alt="Pokaż menu" /></a>}
  </div>
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
    this.setMenuVisibility = this.setMenuVisibility.bind(this);
  }

  render() {
    return (<>
      <Nav>
        <MenuIcon isOpen={this.state.showMenu} setMenuVisibility={this.setMenuVisibility}></MenuIcon>
        <StarCount>{this.props.stars}</StarCount>
      </Nav>
      {this.state.showMenu && <div>menu!</div>}
    </>);
  }

  setMenuVisibility(showMenu) {
    this.setState({ showMenu });
  }
}

export default Navbar;
