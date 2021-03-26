import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Presse from "./components/Presse";
import Shopping from "./components/Shopping";
import SingleItem from "./components/SIngleItem";
import Store from "./components/Store";

const ProductsContext = createContext();

const App = () => {
  const [items, setItems] = useState(null);

  const data = [
    {
      title: "Item 1",
      src: "/images/1.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: true,
      id: 0,
      amount: 0,
    },
    {
      title: "Item 2",
      src: "/images/2.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: true,
      id: 1,
      amount: 0,
    },
    {
      title: "Item 3",
      src: "/images/3.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: true,
      id: 2,
      amount: 0,
    },
    {
      title: "Item 3",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 3,
      amount: 0,
    },
    {
      title: "Item 4",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 4,
      amount: 0,
    },
    {
      title: "Item 5",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 5,
      amount: 0,
    },
    {
      title: "Item 6",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 6,
      amount: 0,
    },
    {
      title: "Item 7",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 7,
      amount: 0,
    },
    {
      title: "Item 8",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 8,
      amount: 0,
    },
    {
      title: "Item 9",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 9,
      amount: 0,
    },
    {
      title: "Item 10",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 10,
      amount: 0,
    },
    {
      title: "Item 11",
      src: "/images/4.jpg",
      src2: "/images/2.jpg",
      price: "999",
      featured: false,
      id: 11,
      amount: 0,
    },
  ];

  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <BrowserRouter>
      <ProductsContext.Provider value={{ items, setItems }}>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route path="/Shopping" component={Shopping}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Store" component={Store}></Route>
          <Route path="/Presse" component={Presse}></Route>
          <Route path="/Newsletter" component={Newsletter}></Route>
          <Route path="/SingleItem" component={SingleItem}></Route>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
        <Footer />
      </ProductsContext.Provider>
    </BrowserRouter>
  );
};
export { ProductsContext };
export default App;
