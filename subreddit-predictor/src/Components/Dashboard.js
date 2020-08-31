import React from "react";
import { connect } from "react-redux";
import { fetchSubs } from "../actions/";

const Dashboard = (props) => {
  return (
    <div>
      <form>
        <p>Enter Post to Predict which subreddit is best to post to:</p>
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
      <h3>Predictions:</h3>
      {props.subPredictions.forEach((i) => {
        return <p>{i}</p>;
      })}
      <h3>Previous Posts:</h3>
      {props.prevPost.forEach((i) => {
        return <p>{i}</p>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    subPredictions: state.subPredictions,
    prevPost: state.prevPost,
  };
};

export default connect(mapStateToProps, { fetchSubs })(Dashboard);
