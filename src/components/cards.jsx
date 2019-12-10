import React from "react";

// function hover(id){
//   return
// }

export default function Card(props) {
  return (
    <div
      className="col-12 col-md-5 mx-auto"
      onMouseEnter={props.onMouseEnter.bind(this, props.id)}
      onMouseLeave={props.onMouseOut}
    >
      <a href="#" className="text-dark text-decoration-none rounded">
        <div className={"card mb-3" + props.hover}>
          <img
            src={require("../assets/boku.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
