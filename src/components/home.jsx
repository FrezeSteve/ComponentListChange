import React from "react";
import Header from "./header";
import Nav from "./nav";
import Jumb from "./jumb";
import Card from "./cards";
import Main from "./main";
import Footer from "./footer";

export default function Home(props) {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        {/* <Nav /> */}

        <Jumb />
        <div className="row mb-2 ">
          {props.items.map((element, index) => {
            if (props.id === element) {
              return (
                <Card
                  key={index}
                  onMouseEnter={props.onMouseEnter}
                  onMouseOut={props.onMouseOut}
                  theState={props.theState}
                  id={element}
                  hover={" shadowMe"}
                />
              );
            }
            return (
              <Card
                key={index}
                onMouseEnter={props.onMouseEnter}
                onMouseOut={props.onMouseOut}
                theState={props.theState}
                id={element}
                hover={" "}
              />
            );
          })}
        </div>
      </div>
      {/* <Main /> */}
      <Footer />
    </React.Fragment>
  );
}
