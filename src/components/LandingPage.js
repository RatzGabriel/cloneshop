import React, { useEffect, useState } from "react";
import NewIn from "./Small Components/NewIn";
import Opening from "./Small Components/Opening";
import SingleProductNewIn from "./Small Components/SingleProductNewIn";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const LandingPage = () => {
  const images = [
    { url: "/images/landing/Landing2.jpg" },
    { url: "/images/landing/Landing3.jpg" },
    { url: "/images/landing/Landing4.jpg" },
    { url: "/images/1.jpg" },
  ];

  return (
    <div>
      <div className="cont-landing">
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          width={1000}
          showThumbs={false}
        >
          <div className="slider">
            <img src="/images/landing/Landing2.jpg" />
          </div>
          <div>
            <img src="/images/landing/landing1.webp" />
          </div>
          <div>
            <img src="/images/landing/Landing3.jpg" />
          </div>
          <div>
            <img src="/images/landing/Landing4.jpg" />
          </div>
        </Carousel>
      </div>
      <div className="landing">
        <Opening />
        <NewIn />
      </div>

      <div className="landing-fotos">
        <img src="/images/landing/Landing3.jpg" alt="" />
        <img src="/images/landing/Landing3.jpg" alt="" />
        <img src="/images/landing/Landing3.jpg" alt="" />
        <img src="/images/landing/Landing3.jpg" alt="" />
      </div>
      <div className="landing">
        <div className="homeoffice">
          <h2>Homeoffice</h2>
          <SingleProductNewIn src={"/images/landing/LandingHomeoffice1.jpg"} />
          <SingleProductNewIn src={"/images/landing/LandingHomeoffice2.jpg"} />
          <SingleProductNewIn src={"/images/landing/LandingHomeoffice2.jpg"} />
          <SingleProductNewIn src={"/images/landing/LandingHomeoffice2.jpg"} />
          <SingleProductNewIn src={"/images/landing/LandingHomeoffice2.jpg"} />
          <SingleProductNewIn src={"/images/landing/LandingHomeoffice2.jpg"} />
        </div>
      </div>
      <div className="landing-open">
        <div className="landing-open-text">
          <h1>Maisonette</h1>
          <p>Gumpendorfer Straße 66, 1060 Wien</p>
          <Opening />
        </div>
        <div>
          <img src="/images/landing/Landing4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
