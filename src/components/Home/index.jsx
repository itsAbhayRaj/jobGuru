import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/Jobs">Browse Jobs</Link>
        </div>
      </div>
      <div className="social-media" data-testid="images">
        <a href="https://www.instagram.com/abhay.raj7054/"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/instagram-new--v1.png" alt="instagram"/></a>
        <a href="https://github.com/itsAbhayRaj"><img width="48" height="48" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/external-github-social-media-tanah-basah-basic-outline-tanah-basah.png" alt="github"/></a>
        <a href="https://www.linkedin.com/in/abhay-raj-yadav-650691252/"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/linkedin--v1.png" alt="linkedin"/></a>
      </div>
    </>
  );
};

export default Home;
