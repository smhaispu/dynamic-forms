import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import FormWrapper from "../index";
import { customRender, testingInitialState } from "../../Utilities/Constants";

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
  const questions = initialState.state.questionaire.questions;
  expect(formHeader).toBeInTheDocument();
  expect(screen.getByTestId("button-previous")).toBeDisabled();
  expect(screen.getByTestId("button-next")).not.toBeDisabled();
  fireEvent.click(screen.getByTestId("button-next"));
  expect(
    screen.getByTestId(questions[initialState.state.currentQuestion].identifier)
  ).toBeInTheDocument();
});
