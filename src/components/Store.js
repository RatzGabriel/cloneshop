import React from "react";
import Opening from "./Small Components/Opening";

const Store = () => {
  return (
    <div>
      <div className="landing">
        <h2>Maisonette</h2>
        <p>Gumpendorfer Straße 66, 1060 Wien</p>
        <p>hello@maisonette.shop</p>
        <p>Instagram: maisonette.shop</p>
        <Opening />
        <img src="/images/landing/Landing2.jpg" alt="landing" />
        <img src="/images/landing/Landing2.jpg" alt="landing" />
        <img src="/images/landing/Landing2.jpg" alt="landing" />
        <img src="/images/landing/Landing2.jpg" alt="landing" />
      </div>
    </div>
  );
};

export default Store;
