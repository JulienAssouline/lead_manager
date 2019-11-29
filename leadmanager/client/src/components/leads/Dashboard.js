import React, { Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";

function Dashboard() {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <Form />
      <Leads />
    </Fragment>
  );
}

export default Dashboard;
