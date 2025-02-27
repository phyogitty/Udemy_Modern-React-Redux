import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./Components/App";
import reducers from "./reducers";

// wrap the app with provider
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
