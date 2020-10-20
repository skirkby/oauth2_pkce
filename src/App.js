import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OAuth2Client } from 'google-auth-library';
import keys from './oauth2.keys.json';

const host = 'https://accounts.google.com';
const path = '/o/oauth2/v2/auth';
const resptype = 'response_type=code';
const clientid = 'client_id=110998841151-0h8i2a5f23pndusr31i9sg83hntaeffg.apps.googleusercontent.com';
const scopes = ['openid', 'email', 'profile'];
const redirect = 'redirect_uri=https%3A//oauth-webapi.herokuapp.com/auth/register';
const state = 'state=security_token%3D138r5719ru3e1%26url%3Dhttps%3A%2F%2Foauth2-login-demo.example.com%2FmyHome';
// const login_hint = 'login_hint=jsmith@example.com';
// const hd = 'hd=example.com';

let loginWithGoogleUrl = `${host}${path}?${resptype}&${clientid}&${redirect}&${state}&scope=`;
scopes.forEach(scope => {
  loginWithGoogleUrl += `${scope}%20`;
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Login:</p>
        <button onClick={openGoogleUrl}>Login with Google</button>
      </header>
    </div>
  );
}

function openGoogleUrl() {

  console.log(OAuth2Client)
  const oAuth2Client = new OAuth2Client(
    keys.web.client_id,
    keys.web.client_secret,
    keys.web.redirect_uris[0]
  );

  // Generate the url that will be used for the consent dialog.
  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
  });


  console.log(authorizeUrl);
  window.open(authorizeUrl, "_blank");
}

export default App;
