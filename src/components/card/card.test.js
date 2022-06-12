import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./card";

describe("<Card />", () => {
  const card = {
    img: "https://picsum.photos/200/300",
    price: "100",
    title: "Test title",
    id: "1",
  };

  test("render content", () => {
    render(
      <Router>
        <Card
          id={card.id}
          img={card.img}
          price={card.price}
          title={card.title}
        />
      </Router>
    );

    screen.getByText(card.title);
    screen.getByText(`$ ${card.price}`);
  });
});
