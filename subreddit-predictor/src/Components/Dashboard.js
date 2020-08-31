import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSubs } from "../actions/";

const Dashboard = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    text: "",
    results: 0,
  });

  return (
    <div>
      <form>
        <p>Enter Post to Predict which subreddit is best to post to:</p>
        Title
        <input name="title" type="text" />
        Message
        <input name="text" type="text" />
        Results
        <input name="results" type="number" />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.fetchSubs(formState);
          }}
        >
          Predict
        </button>
      </form>
      <h3>Predictions:</h3>
      {props.subPredictions.forEach((i) => {
        return (
          <div>
            <p>Text: </p>
            <p>Predictions: </p>
          </div>
        );
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
    userId: state.userId,
  };
};

export default connect(mapStateToProps, { fetchSubs })(Dashboard);
