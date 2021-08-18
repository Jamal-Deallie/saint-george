import React from "react";
import Header from "../../Components/Header/Header";
import HomePage from "../HomePage/HomePage";
import OurStory from "../OurStory/OurStory";
import Men from "../Men/Men";
import Women from "../Women/Women";
import Kids from "../Kids/Kids";
import Yeezy from '../Yeezy/Yeezy';
import ProductDetails from "../../Components/ProductDetails/ProductDetails"
import Footer from "../../Components/Footer/Footer";
import Checkout from "../Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ourstory" component={OurStory} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/kids" component={Kids} />
        <Route path="/yeezy" component={Yeezy} />
        <Route path="/brand/:brandKeyword" component={Yeezy} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route path="/checkout" component={Checkout}/>
        <Route>404 Not Found</Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Main;
