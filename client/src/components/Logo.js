import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';

const LogoWrapper = styled('div')`
  ${({ welcome }) =>
    welcome &&
    css`
      margin: 50% 0 5%;
    `}

  img {
    width: 8rem;
    display: block;
  }

  h1 {
    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 2px;
      background-color: white;
    }
  }

  p {
    font-size: ${({ theme }) => theme.font.size.label.primary};
    margin-top: 0.5rem;
  }
`;

const Logo = ({ title, subtitle, welcome }) => (
  <LogoWrapper welcome={welcome}>
    {title && <h1>{title}</h1>}
    {subtitle && <p>{subtitle}</p>}
  </LogoWrapper>
);

Logo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  welcome: PropTypes.bool
};

Logo.defaultProps = {
  title: null,
  subtitle: null,
  welcome: false
};

export default Logo;
