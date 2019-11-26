import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Card from "./Card";
import STORE from "../store";

describe("Card component", () => {
  //smoke test
  const allCards = Object.values(STORE.allCards);
  const cards = allCards.map(elem => {
    return <Card key={elem.id} title={elem.title} content={elem.content} />;
  });

  it("Renders without crashing Test", () => {
    const div = document.createElement("div");
    ReactDOM.render([cards], div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it("UI renders", () => {
    const tree = renderer.create([cards]).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
