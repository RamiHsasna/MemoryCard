import "../Card.css";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.img}
        alt="Avatar"
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
