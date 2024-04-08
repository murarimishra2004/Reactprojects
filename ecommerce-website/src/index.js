import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
 
import AppRoutes from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
 

root.render(
  <>
    <Auth0Provider
      domain="dev-lvouxrcpl75bigp5.us.auth0.com"
      clientId="qxiDvW5W44RcewY0628isn7nlIw6DDBx"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>         
        <AppRoutes/>     
                
      </BrowserRouter>
    </Auth0Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
