import React from "react";
import List from "./components/List";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Store: this.props.STORE
    };
  }

  render() {
    const allCards = this.state.Store.allCards;
    const listsArr = this.state.Store.lists;

    //to map through list array and for each elem pass in a mapped array of cards
    const list = listsArr.map(elem => {
      return (
        <List
          key={elem.id}
          header={elem.header}
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
