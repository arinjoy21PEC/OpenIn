import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GoogleOAuthProvider} from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="919708899642-2tafvf17e1p6vn0pbb5go3c4d4k8p3mj.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
