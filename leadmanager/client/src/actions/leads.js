import axios from "axios";
import { GET_LEADS } from "./types";

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
