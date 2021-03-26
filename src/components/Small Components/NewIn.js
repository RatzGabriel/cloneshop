import React from "react";
import Opening from "./Opening";
import SingleProductNewIn from "./SingleProductNewIn";

const NewIn = () => {
  return (
    <div className="newIn">
      <div>
        <h2>NEW IN</h2>
        <p>Nagellacke, Top-& Basecoats und Nagelackentferner von OZN vegan.</p>
      </div>
      <div className="newInSingle">
        <SingleProductNewIn src={"/images/NewIN/NewIn1.jpg"} />
        <SingleProductNewIn src={"/images/NewIN/NewIn1.jpg"} />
        <SingleProductNewIn src={"/images/NewIN/NewIn1.jpg"} />
      </div>
    </div>
  );
};

export default NewIn;
