import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";
import STORE from "../store";

describe("List component", () => {
  //smoke test
  const allCards = STORE.allCards;
  const allLists = STORE.lists.map(elem => {
    return (
      <List
        key={elem.id}
        header={elem.header}
        cards={elem.cardIds.map(elem => allCards[elem])}
      />
    );
  });
  it("Renders without crashing Test", () => {
    const div = document.createElement("div");
    ReactDOM.render([allLists], div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it("UI renders", () => {
    const tree = renderer.create([allLists]).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
