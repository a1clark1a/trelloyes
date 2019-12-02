import React from "react";
import List from "./components/List";
import "./app.css";
import STORE from "./store";

const newRandomCard = () => {
  const id =
    Math.random()
      .toString(36)
      .substring(2, 4) +
    Math.random()
      .toString(36)
      .substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum"
  };
};

//HOW TO TO DO?
function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

class App extends React.Component {
  state = {
    Store: STORE
  };

  handleDelete = cardId => {
    console.log("delete", { cardId });

    const { lists, allCards } = this.state.Store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);
    console.log("omit", newCards);
    this.setState({
      Store: {
        lists: newLists,
        allCards: newCards
      }
    });
  };

  handleAddRandomCard = listId => {
    console.log("adding random card", { listId });

    const newCard = newRandomCard();
    console.log(newCard);
    const newList = this.state.Store.lists.map(elem => {
      if (elem.id === listId) {
        return {
          ...elem,
          cardIds: [...elem.cardIds, newCard.id]
        };
      }

      return elem;
    });

    this.setState({
      Store: {
        lists: newList,
        allCards: {
          ...this.state.Store.allCards,
          [newCard.id]: newCard
        }
      }
    });
  };

  render() {
    const { lists, allCards } = this.state.Store;

    //to map through list array and for each elem pass in a mapped array of cards
    const list = lists.map(elem => {
      return (
        <List
          key={elem.id}
          id={elem.id}
          header={elem.header}
          onDeleteCard={this.handleDelete}
          onAddRandomCard={this.handleAddRandomCard}
          cards={elem.cardIds.map(id => allCards[id])}
        />
      );
    });
    return (
      <main className="App">
        <header className="App-header">
          <h1>TrelloYes!</h1>
        </header>
        <div className="App-list">{list}</div>
      </main>
    );
  }
}

export default App;
