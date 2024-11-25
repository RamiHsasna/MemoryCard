/* eslint-disable no-unused-vars */
import React from "react";
import "../Scoreboard.css";
import PropTypes from "prop-types";

export default function ScoreBoard(props) {
  return (
    <div className="scoreBoard--container">
      <p>Score :{props.score} </p>
      <p>Best Score :{props.bestScore} </p>
    </div>
  );
}

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};
