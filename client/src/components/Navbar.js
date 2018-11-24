import React from "react";
import styled from "react-emotion";

const Nav = styled('nav')`
  background: ${props => props.theme.color.accent.primary.base};
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const MenuIcon = () => (
  <div onClick=''>&equiv;</div>
);

const StarCount = ({ stars }) => (
  <div>* {stars}</div>
)

class Navbar extends React.Component {
  render() {
    return (<Nav>
      <MenuIcon></MenuIcon>
      <StarCount stars={this.props.stars} />
    </Nav>);
  }
}

export default Navbar;
