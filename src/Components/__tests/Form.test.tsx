import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import FormWrapper from "../";
import { customRender, testingInitialState } from "../../utilities/Constants";

test("Form Renders", () => {
  const Component = <FormWrapper />;
  const initialState = {
    ...testingInitialState,
  };
  customRender({
    Component,
    initialState,
  });
  const formHeader = screen.getByTestId("form-wrapper");
  expect(formHeader).toBeInTheDocument();
});

test("Previous button is disabled", () => {
  const Component = <FormWrapper />;
  const initialState = {
    ...testingInitialState,
  };
  customRender({
    Component,
    initialState,
  });

  expect(screen.getByTestId("button-previous")).toBeDisabled();
});

test("Next button", () => {
  const Component = <FormWrapper />;
  const initialState = {
    ...testingInitialState,
  };
  customRender({
    Component,
    initialState,
  });
  const questions = initialState.state.questionaire.questions;
  expect(screen.getByTestId("button-next")).not.toBeDisabled();
  fireEvent.click(screen.getByTestId("button-next"));
  expect(
    screen.getByTestId(questions[initialState.state.currentQuestion].identifier)
  ).toBeInTheDocument();
});

//Additional future test cases to be added
// 1.Submit Button testing
// 2.Snapshot testing after Form is Submitted
// 3.FireEvent for required fields should enable the next button!
