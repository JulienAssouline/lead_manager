import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

function Form(props) {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: ""
  });

  function onChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    props.addLead(formValue);
    setFormValue({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={onChange}
            value={formValue.name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={onChange}
            value={formValue.email}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            onChange={onChange}
            value={formValue.message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  addLead: PropTypes.func.isRequired
};

export default connect(null, { addLead })(Form);
