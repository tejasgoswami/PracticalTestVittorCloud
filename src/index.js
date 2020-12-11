import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Routes from "./routes";

import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  return (
    <Provider store={store()}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
