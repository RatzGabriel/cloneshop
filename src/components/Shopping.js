import React, { useContext, useState } from "react";
import { ProductsContext } from "../App";
import { Link } from "react-router-dom";
import SingleProductNewIn from "./Small Components/SingleProductNewIn";
import formatter from "./Small Components/Formatter";

const Shopping = () => {
  const { items } = useContext(ProductsContext);

  if (items) {
    return (
      <div className="shopping">
        <div className="collection">
          <h3>Collection&</h3>
          <h2>Products</h2>
        </div>

        {items.map((item) => (
          <Link
            className="singleitem"
            to={{ pathname: "/SingleItem", state: item }}
          >
            <h2>{item.title}</h2>
            <img src={item.src} alt="test" />
            <p>{formatter(item.price)}</p>
          </Link>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Shopping;
