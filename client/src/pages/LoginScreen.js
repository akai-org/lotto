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
  responseFacebook(response) {
    const {
      accessToken,
      data_access_expiration_time,
      email,
      expiresIn,
      name,
      picture,
      reauthorize_required_in,
      signedRequest,
      userID
    } = response;
    // const { email, password } = this.state;
    // // const { onLogin, hist ory } = this.props;

    // try {
    //   const { token, userName } = await request('auth/login', {
    //     method: 'POST',
    //     body: { email, password },
    //   });

    //   saveCookie(TOKEN_COOKIE, token);
    //   saveCookie(USER_NAME_COOKIE, userName);
    //   onLogin(userName);
    //   history.push('/home');
    // } catch (error) {
    //   this.setState({
    //     blocked: false,
    //     email: '',
    //     password: '',
    //     errorMessage: 'Failed to login.',
    //   });
    // }
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
            callback={this.responseFacebook}
            render={renderProps => (
              <Button
                as="input"
                type="submit"
                primary
                onClick={renderProps.onClick}
              >
                Zaloguj się przez facebook
              </Button>
            )}
          />
        </Layout>
      </Fragment>
    );
  }
}
