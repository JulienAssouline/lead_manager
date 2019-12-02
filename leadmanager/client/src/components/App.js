import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboad from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import { Provider } from "react-redux";
import store from "../store";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Alert options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div>
          <Header />
          <Alerts />
          <div className="container">
            <Dashboad />
          </div>
        </div>
      </AlertProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
