import React from "react";
import List from "./list";
import "./app.css";
import STORE from "./store";

export default class App extends React.Component {
  state = STORE;

  newRandomCard = () => {
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: "lorem ipsum",
    };
  };

  handleAddButton = (listID) => {
    console.log("ADD!");
    const newCard = this.newRandomCard();

    this.setState({
      allCards: { ...this.state.allCards, [newCard.id]: newCard },
      lists: this.state.lists.map((list) => {
        if (list.id === listID) {
          list.cardIds = [...list.cardIds, newCard.id];
        }
        return list;
      }),
    });
  };

  handleDeleteButton = (listID, cardID) => {
    console.log("add delete");
    // When the "delete card" button is clicked on any card, remove all references to that card from state.
    this.setState({
      lists: this.state.lists.map((list) => {
        if (list.id === listID) {
          list.cardIds = list.cardIds.filter((cid) => cid !== cardID);
        }
        return list;
      }),
    });
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => this.state.allCards[id])}
              onAddCard={this.handleAddButton}
              onDeleteCard={this.handleDeleteButton}
            />
          ))}
        </div>
      </main>
    );
  }
}
