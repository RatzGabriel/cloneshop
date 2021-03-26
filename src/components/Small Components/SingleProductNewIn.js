import React from "react";

const SingleProductNewIn = ({ src }) => {
  console.log(src);
  return (
    <div>
      <img src={src} alt="impo" />
      <p>OZV veganer Nagellack - Mila</p>
      <p>$16</p>
    </div>
  );
};

export default SingleProductNewIn;
