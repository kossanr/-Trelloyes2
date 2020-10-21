import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button
        onClick={() => props.onDeleteCard(props.listID, props.id)}
        type="button"
        className="List-delete-button"
      >
        - Delete Card
      </button>
    </div>
  );
}
