import React from "react";
import "./card.css";

const Card = props => {
  //console.log(props);
  return (
    <div className="Card">
      <button onClick={() => props.onDeleteCard(props.id)} type="button">
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

Card.propTypes = {
  onDeleteCard: () => {}
};

export default Card;
