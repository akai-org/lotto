// import Cookies from 'universal-cookie';
import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Particles from 'react-particles-js';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import useCookie from '../hooks/useCookie';

// const cookies = new Cookies();

export default function LoginScreen() {
  const [token, setToken] = useCookie('token', '');

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
          callback={response => {
            setToken(response.accessToken);
          }}
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
