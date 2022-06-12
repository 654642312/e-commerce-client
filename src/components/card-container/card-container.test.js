import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CardContainer from "./card-container";
import Card from "../card/card";

describe("<CardContainer />", () => {
  test("renders its childrens", () => {
    const card = {
      img: "https://picsum.photos/200/300",
      price: "100",
      title: "Test title",
      id: "1",
    };

    render(
      <Router>
        <CardContainer>
          <Card
            id={card.id}
            img={card.img}
            price={card.price}
            title={card.title}
          />
        </CardContainer>
      </Router>
    );

    screen.getByText(card.title);
    screen.getByText(`$ ${card.price}`);
  });


});
