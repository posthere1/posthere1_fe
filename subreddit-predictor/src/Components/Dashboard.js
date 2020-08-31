import React from "react";
import { connect } from "react-redux";
import { fetchSubs } from "../actions/";

const Dashboard = (props) => {
  return (
    <div>
      <form>
        <p>Type In Post for Prediction</p>
        <input type="text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.fetchSubs(1);
          }}
        >
          Predict
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, { fetchSubs })(Dashboard);
