import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

function Leads(props) {
  useEffect(() => {
    props.getLeads();
  }, []);

  console.log(props);

  return (
    <div>
      <h1>Leads</h1>
    </div>
  );
}

Leads.propTypes = {
  leads: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(Leads);
