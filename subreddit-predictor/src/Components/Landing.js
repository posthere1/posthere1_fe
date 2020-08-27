import React from "react";
import formsPicture from "../assets/forms.png";
import questionPicture from "../assets/questions.png";

const Landing = () => {
  return (
    <>
      <section className="main-content">
        <h1>Subreddit Predictor</h1>
        <h2>Simplifying the Front Page of the Internet</h2>
        <div className="top">
          <img src={formsPicture} alt="Man holding a form" />
          <div className="description">
            <p>
              Post Here helps you find the best place to share on Reddit. Just
              create your post and we'll find the subreddit that is most
              appropriate.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="mid">
          <p>
            Are you struggling to find the best subreddit to submit your post?
            Maybe you are new to reddit and don't quite know the communities it
            has.
          </p>
          <img src={questionPicture} alt="Woman holding question mark" />
        </div>
        <div className="bottom">
          <h3>Post Here has got you covered.</h3>
          <button>About</button>
        </div>
      </section>

      <footer>
        <p>© Post Here 2020</p>
      </footer>
    </>
  );
};

export default Landing;
