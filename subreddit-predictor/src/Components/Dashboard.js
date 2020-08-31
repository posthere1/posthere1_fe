import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSubs, fetchPrev } from "../actions/";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Flex = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 40%;
  text-align: center;
`;

const FlexPredict = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const FlexTwo = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 35%;
  text-align: center;
`;

const FlexThree = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-left: 10%;
  // border: 1px solid black;
`;

const Dashboard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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
        <Flex>
          <Card className={classes.root}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Enter Post to Predict which subreddit it best belongs
              </Typography>
              <br />

              {/* Title */}
              <TextField
                name="title"
                type="text"
                variant="outlined"
                label="Title Of Your Post"
                value={formState.title}
                onChange={handleChange}
              />
              {/* Message */}
              <TextField
                name="text"
                type="text"
                variant="outlined"
                rowsMax={5}
                multiline
                label="Write Your Post"
                value={formState.text}
                onChange={handleChange}
              />
              {/* Results */}
              <TextField
                name="results"
                type="number"
                variant="outlined"
                label="Results"
                value={formState.results}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  props.fetchSubs(formState);
                }}
              >
                Predict
              </Button>
            </CardContent>
          </Card>
        </Flex>
      </form>
      <br />
      <br />
      <FlexThree>
        <FlexPredict>
          <Card>
            <Typography variant="h5" component="h2" color="primary">
              Subreddit Prediction
            </Typography>
            {props.subPredictions.map((i) => {
              return (
                <div className="predictions">
                  <p>Subreddit: {i.suggested_subreddit}</p>
                  <p>Predicted Upvotes: {i.pred_upvotes}</p>
                </div>
              );
            })}
          </Card>
        </FlexPredict>

        <br />
        <br />
        <FlexTwo>
          <Card>
            <Typography variant="h5" component="h2" color="primary">
              Previous Posts
            </Typography>
            {props.prevPost.map((i) => {
              return (
                <Card>
                  <Typography color="textPrimary">
                    <b>{i.title}</b>
                  </Typography>
                  <p>{i.text}</p>
                </Card>
              );
            })}
          </Card>
        </FlexTwo>
      </FlexThree>
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
