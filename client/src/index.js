import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// BrowserRouter
import { BrowserRouter as Container } from "react-router-dom";
// store
import { createStore } from "redux";
import contactReducer from "./redux/reducers/ContactReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

// store(createStore)
const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <App />
    </Container>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
