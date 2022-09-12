import React from "react";
import './LukeButton.css'

export default function Welcome(props) {
    return <button className="lukeButton">{props.name}</button>;
  }