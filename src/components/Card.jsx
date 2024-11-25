/* eslint-disable no-unused-vars */
import React from "react";
import "../Card.css";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`../images/${props.img}`}
        style={{ width: "100%" }}
        className="card--image"
      />
      <h2 className="card--characterTitle">{props.characterName}</h2>
    </div>
  );
}

Card.propTypes = {
  characterName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
