import React from "react";
import Card from "./Card.js";
import "./list.css";

const List = props => {
  console.log(props);
  const cards = props.cards.map(elem => {
    return (
      <Card
        key={elem.id}
        id={elem.id}
        title={elem.title}
        content={elem.content}
        onDeleteCard={props.onDeleteCard}
      />
    );
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button
          onClick={() => props.onAddRandomCard(props.id)}
          type="button"
          className="List-add-button"
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
};

List.defaultProps = {
  onAddRandomCard: () => {}
};

export default List;
