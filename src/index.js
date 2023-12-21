import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './platform/style/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.render( 
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>

  , document.getElementById("root"));
