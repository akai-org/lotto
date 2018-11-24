import React from "react";
import styled from "react-emotion";

const MenuBox = styled('nav')`
  background: ${props => props.theme.color.accent.primary.base};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 201;
  color: #fff;
  
  transition: transform .5s ease;
  ${props => props.isVisible || `
    transform: translateX(-100%);
  `}
`;

const Overlay = styled('div')`
  transition: background .5s ease;
  display: none;
  ${props => props.isVisible && `
    display: block;
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 200;
  `}
`;

const Menu = ({ isVisible, onClose }) => (
  <>
    <MenuBox isVisible={isVisible}>
      some nice options
    </MenuBox>
    <Overlay isVisible={isVisible} onClick={onClose}>
    </Overlay>
  </>
);

export default Menu;
