import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import { createMessage } from "./messages";

export const getLeads = () => dispatch => {
  axios
    .get("/api/leads_app/")
    .then(result => {
      dispatch({
        type: GET_LEADS,
        payload: result.data
      });
    })
    .catch(err => console.log(err));
};

// Delete Leads

export const deleteLeads = id => dispatch => {
  axios
    .delete(`/api/leads_app/${id}/`)
    .then(result => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// add lead
export const addLead = lead => dispatch => {
  axios
    .post("/api/leads_app/", lead)
    .then(result => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: result.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
