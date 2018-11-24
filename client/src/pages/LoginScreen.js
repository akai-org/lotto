import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

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
      <div>
        <div>dupa jasia</div>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}
