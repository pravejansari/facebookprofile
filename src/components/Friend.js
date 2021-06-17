import React from "react";
import "./Friend.css";

function Friend(props) {
  return (
    <div className="friendComp">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
    </div>
  );
}

export default Friend;
