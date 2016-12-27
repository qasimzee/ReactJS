import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Posts}></IndexRoute>
      <Route path="post" component={Post}></Route>
    </Route>
  </Router>
  , app);