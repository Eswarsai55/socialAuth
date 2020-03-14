import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
    this.signup = this.signup.bind(this);
  }

  signup(res, type) {

  }
  render() {

    const responseFacebook = (response) => {
      console.log(response);
      this.signup(response, 'facebook');
    }

    const responseGoogle = (response) => {
      console.log(response);
      this.signup(response, 'google');
    }

    return (
      <>
        <div>
          <GoogleLogin
          clientId="749827152043-v2hdnsd8d1ufeobt9aldkdq4ujkhe0p4.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          />
         </div>
         <div>
          <FacebookLogin
            appId="2538373156450067"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
          />
         </div>
      </>
    )
  }
}

export default Login
