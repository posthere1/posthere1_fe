import React from "react";
import "../About.css";

const About = () => {
  return (
    <>
      <div className="container"></div>
      <h1>About Us</h1>
      <section className="our-team">
        <div className="person">
          <a href="https://github.com/tippitytapp" target="blank">
            <img
              src="https://avatars2.githubusercontent.com/u/60143534?s=460&u=401ca6019ff578e931950564faf99cee49012536&v=4"
              alt="Marc Tapp"
            />
          </a>
          <p className="name">/u/Marc Tapp</p>
          <p className="role">Project Leader</p>
        </div>
        <div className="person">
          <a href="https://github.com/william-jensen01" target="blank">
            <img
              src="https://avatars2.githubusercontent.com/u/68026783?s=400&u=93bb6b7c3f1955d3e200a7d16bea8cce40af2613&v=4"
              alt="William Jensen"
            />
          </a>
          <p className="name">/u/William Jensen</p>
          <p className="role">User Interface</p>
        </div>
        <div className="person">
          <a href="https://github.com/jonathan-portillo" target="blank">
            <img
              src="https://avatars0.githubusercontent.com/u/54336208?s=460&u=742c3e926f896c1bb004a6e806c9cb3ccd97e7cb&v=4"
              alt="Jonathan Portillo"
            />
          </a>
          <p className="name">/u/Jonathan Portillo</p>
          <p className="role">Front End React 1</p>
        </div>
        <div className="person">
          <a href="https://github.com/theprogramking" target="blank">
            <img
              src="https://avatars2.githubusercontent.com/u/18515031?s=460&u=92226bd6364e602212d07e2c9b0290ff6e2dcc64&v=4"
              alt="Luke Shimkus"
            />
          </a>
          <p className="name">/u/Luke Shimkus</p>
          <p className="role">Front End</p>
        </div>
        <div className="person">
          <a href="https://github.com/B-Marshall218" target="blank">
            <img
              src="https://avatars3.githubusercontent.com/u/44649140?s=460&v=4"
              alt="Brian Marshall"
            />
          </a>
          <p className="name">/u/Brian Marshall</p>
          <p className="role">Backend</p>
        </div>
        <div className="person">
          <a href="http://github.com/AaronReichert" target="blank">
            <img
              src="https://avatars1.githubusercontent.com/u/59718295?s=460&u=d1c4dc9e63b7efd1fe234b83815462edc033e0e3&v=4"
              alt="Aaron Reichert"
            />
          </a>
          <p className="name">/u/Aaron Reichert</p>
          <p className="role">Data Science</p>
        </div>
        <div className="person">
          <a href="https://github.com/TobyChen320" target="blank">
            <img
              src="https://avatars0.githubusercontent.com/u/61997784?s=460&v=4"
              alt="Toby Chen"
            />
          </a>
          <p className="name">/u/Toby Chen</p>
          <p className="role">Data Science</p>
        </div>
        <div className="person">
          <a href="https://github.com/Khislatz" target="blank">
            <img
              src="https://avatars3.githubusercontent.com/u/47505600?s=460&u=e90a4b2328687e47452de61775c02764be1e3f92&v=4"
              alt="Haley Zhuraeva"
            />
          </a>
          <p className="name">/u/Haley Zhuraeva</p>
          <p className="role">Subreddit Prediction Model</p>
        </div>
        <div className="person">
          <a href="https://github.com/erikseguinte" target="blank">
            <img
              src="https://avatars3.githubusercontent.com/u/16523146?s=460&u=f30a2b703c4cfcf29d082c78228e517d551cd1cc&v=4"
              alt="Erik Seguinte"
            />
          </a>
          <p className="name">/u/Erik Seguinte</p>
          <p className="role">Data Science</p>
        </div>
      </section>
      <footer>
        <p>© Post Here 2020</p>
      </footer>
    </>
  );
};
export default About;
