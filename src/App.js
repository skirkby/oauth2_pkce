import React from 'react';
import logo from './logo.svg';
import './App.css';

const host = 'https://accounts.google.com';
const path = '/o/oauth2/v2/auth';
const resptype = 'response_type=code';
const clientid = 'client_id=424911365001.apps.googleusercontent.com';
const scopes = ['openid', 'email', 'profile'];
const redirect = 'redirect_uri=https%3A//oauth2.example.com/code';
const state = 'state=security_token%3D138r5719ru3e1%26url%3Dhttps%3A%2F%2Foauth2-login-demo.example.com%2FmyHome';
const login_hint = 'login_hint=jsmith@example.com';
const hd = 'hd=example.com';

let loginWithGoogleUrl = `${host}${path}?${resptype}&${clientid}&${redirect}&${state}&${login_hint}&${nonce}&${hd}&scope=`;
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
  console.log(loginWithGoogleUrl);
  window.open(loginWithGoogleUrl, "_blank");
}

export default App;