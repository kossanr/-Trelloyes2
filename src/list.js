import React from "react";
import Card from "./card";
import "./list.css";

export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card
            listID={props.id}
            key={card.id}
            {...card}
            onDeleteCard={props.onDeleteCard}
          />
        ))}
        <button
          onClick={() => props.onAddCard(props.id)}
          type="button"
          className="List-add-button"
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}
