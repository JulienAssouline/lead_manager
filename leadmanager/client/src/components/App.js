import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboad from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="container">
          <Dashboad />
        </div>
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
