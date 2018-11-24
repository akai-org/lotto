import React, { Fragment, Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';

// import Form from '../components/Form';
// import Input from '../components/Input';
import Particles from 'react-particles-js';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export default class LoginScreen extends Component {
  constructor() {
    super();

    this.componentClicked = this.componentClicked.bind(this);
  }

  componentClicked() {
    console.log('clicked');
  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <Fragment>
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: '#3CA9D1',
                  blur: 10
                }
              }
            }
          }}
          style={{
            width: '100%',
            backgroundColor: `rgb(27, 43, 73)`,
            position: 'absolute',
            zIndex: '-1'
          }}
        />
        <Layout distributed spanned narrow>
          <Logo welcome title="Lootto" subtitle="get rekt." />
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            render={renderProps => (
              <Button
                as="input"
                type="submit"
                value="Zaloguj się przez facebook"
                primary
                handleClick={renderProps.onClick}
              />
            )}
          />
        </Layout>
      </Fragment>
    );
  }
}
