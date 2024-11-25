/* eslint-disable no-unused-vars */
import React from "react";
import "../Card.css";
import PropTypes from "prop-types";

export default function Card({ img, characterName, onCardClick }) {
  return (
    <div className="card" onClick={onCardClick}>
      <img
        src={`../images/${img}`}
        style={{ width: "100%" }}
        className="card--image"
      />
      <h2 className="card--characterTitle">{characterName}</h2>
    </div>
  );
}

Card.propTypes = {
  characterName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onCardClick: PropTypes.func,
};
