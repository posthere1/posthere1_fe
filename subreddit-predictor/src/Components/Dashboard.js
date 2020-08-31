import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSubs, fetchPrev } from "../actions/";

const Dashboard = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    text: "",
    results: 1,
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    props.fetchPrev(props.userId);
  }, [props.prevPost]);

  return (
    <div>
      <br />
      <br />
      <form>
        <p>Enter Post to Predict which subreddit is best to post to:</p>
        <br />
        Title
        <input
          name="title"
          type="text"
          value={formState.title}
          onChange={handleChange}
        />
        Message
        <input
          name="text"
          type="text"
          value={formState.text}
          onChange={handleChange}
        />
        Results
        <input
          name="results"
          type="number"
          value={formState.results}
          onChange={handleChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.fetchSubs(formState);
          }}
        >
          Predict
        </button>
      </form>
      <br />
      <br />
      <h3>Predictions:</h3>
      {props.subPredictions.map((i) => {
        return (
          <div className="predictions">
            <p>Subreddit: {i.suggested_subreddit}</p>
            <p>Predicted Upvotes: {i.pred_upvotes}</p>
          </div>
        );
      })}
      <br />
      <br />
      <h3>Previous Posts:</h3>
      {props.prevPost.map((i) => {
        return (
          <div>
            <p>
              <b>{i.title}</b>
            </p>
            <p>{i.text}</p>
          </div>
        );
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

export default connect(mapStateToProps, { fetchSubs, fetchPrev })(Dashboard);
