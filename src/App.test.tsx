import React from "react";
import { screen } from "@testing-library/react";
import { customRender, testingInitialState } from "./utilities/Constants";
import Header from "./components/layouts/Header";
import Loader from "./utilities/Loader";

test("Check Header", () => {
  const initialState = testingInitialState;
  const Component = (
    <Header
      headline={initialState.state.questionaire.name}
      description={initialState.state.questionaire.description}
    />
  );
  customRender({
    initialState,
    Component,
  });
  const formHeader = screen.queryByTestId("form-header");
  expect(formHeader).toHaveTextContent("Privathaftpflichtversicherung");
});

test("Check Loader", () => {
  const initialState = {
    ...testingInitialState,
    loading: true,
  };
  const Component = <Loader />;
  customRender({
    initialState,
    Component,
  });
  const loaderContainer = screen.queryByTestId("form-loader");
  expect(loaderContainer).toBeInTheDocument();
});
