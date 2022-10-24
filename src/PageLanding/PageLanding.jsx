import React from "react";
import "./PageLanding.css";
import { Original } from "../img/product-landing-page-logo.png";

const PageLanding = () => {
  return (
    <div>
      <header className="header">
        <img
          src={require("../img/product-landing-page-logo.png")}
          alt="no internet"
          className="headeer-img"
        />
        <nav className="nav-bar">
          <a href="#" className="nav-link">
            Feature
          </a>
          <a href="#" className="nav-link">
            How it works
          </a>
          <a href="#" className="nav-link">
            Pricing
          </a>
        </nav>
      </header>
      <main>
        <p className="header-title">Handcrafted, home-made masterpieces</p>
        <form action="">
          <input type="text" placeholder="Enter your email address" />
          <button>GET STARTED</button>
        </form>

        <div className="row container-details">
          <div className="col-sm-6">
            <span className="details-header">Premium Materials</span>
            <p>
              Our trombones use the shiniest brass which is sourced locally.
              This will increase the longevity of your purchase.
            </p>
          </div>
        </div>
        <div className="row container-details">
          <div className="col-sm-6">
            <span className="details-header">Fast Shipping</span>
            <p>
              We make sure you recieve your trombone as soon as we have finished
              making it. We also provide free returns if you are not satisfied.
            </p>
          </div>
        </div>
        <div className="row container-details">
          <div className="col-sm-6">
            <span className="details-header">Quality Assurance</span>
            <p>
              For every purchase you make, we will ensure there are no damages
              or faults and we will check and test the pitch of your instrument.
            </p>
          </div>
        </div>

        <div className="row video-frame">
          <div>
            <iframe
              className="iframe-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y8Yv4pnO7qc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              id="video"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="row main-purchase-container">
          <div className="purchase-title">
            <h6>TENOR TROMBONE</h6>
          </div>
          <h2>$60</h2>
          <p>Lorem Ipson</p>
          <p>Lorem Ipson</p>
          <p>Lorem Ipson</p>
          <p>Lorem Ipson</p>
          {/* <div>
            <button className="btn btn-info">SELECT</button>
          </div> */}
        </div>
      </main>
    </div>
  );
};
export default PageLanding;
