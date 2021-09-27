import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Login from "./Login";
import Main from "./Main";
import VideoDetail from "./VideoDetail";
import Dummy from "./Dummy.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Route exact path="/" component={Login} />
        <Route exact path="/movies" component={Main} />
        <Route exact path="/detail" component={VideoDetail} />
        {/* <Route exact path="/dummy" component={Dummy} /> */}
      </CookiesProvider>
    </BrowserRouter>
  );
};

export default Routes;
