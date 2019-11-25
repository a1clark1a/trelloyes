import React from "react";
import Card from "./Card.js";
import "./List.css";

const List = props => {
  const cards = props.cards.map(elem => {
    return <Card key={elem.id} title={elem.title} content={elem.content} />;
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
};

export default List;
