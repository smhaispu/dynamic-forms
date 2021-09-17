import React from "react";
import { screen } from "@testing-library/react";
import TextBox from "../form-elements/TextBox";
import { customRender, testingInitialState } from "../../utilities/Constants";

test("Check if Mandatory Text box has a astrix", () => {
  const initialState = {
    ...testingInitialState,
    questionnaire: {
      id: 40,
      identifier: "ewBzTS",
      name: "Privathaftpflichtversicherung",
      questions: [
        {
          question_type: "text",
          identifier: "date_22039590",
          headline:
            "Was wäre Dein Wunschtermin für den Beginn der Privathaftpflichtversicherung?",
          description: null,
          required: true,
          multiline: false,
          jumps: [],
        },
      ],
    },
  };

  const { animation, currentQuestion } = initialState.state;
  const { headline, required } = initialState.state.questionaire.questions[0];
  const Component = (
    <TextBox
      value={"testValue"}
      headline={headline}
      animation={animation}
      index={currentQuestion}
      required={required}
    />
  );
  customRender({
    Component,
    initialState,
  });
  const textBoxLabel = screen.getByTestId("text-box-label");
  const textBoxInput = screen.getByTestId("text-box-input");
  expect(textBoxLabel).toHaveTextContent("*");
  expect(textBoxInput).toHaveValue("testValue");
});
