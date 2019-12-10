import React, { Component, Fragment } from "react";
import Product from "./Product";
import HomeComponent from "../components/home";
import { Helmet } from "react-helmet";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { shadow: true, id: "" };
  }
  onMouseEnter = (id, event) => {
    this.setState({
      shadow: false,
      id: id
    });
  };
  onMouseOut = () => {
    this.setState({
      shadow: true,
      id: ""
    });
  };
  render() {
    const items = [1, 2, 3, 4, 5, 6];
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog About Believe</title>
          <meta
            name="description"
            content="Everyone has a belief in something."
          />
          <meta
            name="keywords"
            content="believe, beliefs, believed, belief, Persona, character, morals, moral
            health belief model, belief synonym, 	define belief, belief system, this i believe,
            i want to believe, 	i believe in a thing called love, believe in yourself"
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <HomeComponent
          onMouseEnter={this.onMouseEnter}
          onMouseOut={this.onMouseOut}
          theState={this.state.shadow}
          id={this.state.id}
          items={items}
        />
        {/* <Product /> */}
      </Fragment>
    );
  }
}

export default Home;
