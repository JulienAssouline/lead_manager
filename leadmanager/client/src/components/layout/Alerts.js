import React, { useEffect, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Alerts({ alert, error, message }) {
  useEffect(() => {
    if (error.status) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
    }

    if (message) {
      if (message.deleteLead) alert.success(message.deleteLead);
      if (message.addLead) alert.success(message.addLead);
    }
  }, [error, alert, message]);

  return <Fragment />;
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withAlert()(Alerts));
