import React, { useCallback, useContext, useState } from "react";

import TextBox from "./TextBox";
import TextArea from "./TextArea";
import SingleSelect from "./SingleSelect";
import { Context } from "../../state-management/context";
import { Button, ButtonGroup } from "../index.style";
import MultiSelect from "./MultiSelect";

const Form = () => {
  const { state, dispatch } = useContext(Context);
  const currentQuestion = state.currentQuestion;
  const question = state.questionaire?.questions?.[currentQuestion];
  const animation = state.animation;

  const handleClickNext = () => {
    dispatch({ type: "SET_NEXT_QUESTION" });
  };
  const handleClickPrevious = () => {
    dispatch({ type: "SET_PREVIOUS_QUESTION" });
  };

  const handleClickSubmit = () => {
    dispatch({ type: "SUBMIT_DATA", payload: state.questionaire });
  };

  const QuestionView = useCallback(() => {
    switch (question.question_type) {
      case "text": {
        if (question.multiline) {
          return (
            <TextArea
              value={question.value}
              animation={animation}
              index={currentQuestion}
              key={question.identifier}
              required={question.required}
              headline={question.headline}
            />
          );
        } else {
          return (
            <TextBox
              value={question.value}
              animation={animation}
              index={currentQuestion}
              key={question.identifier}
              required={question.required}
              headline={question.headline}
            />
          );
        }
      }
      case "multiple-choice": {
        if (question.multiple) {
          return (
            <MultiSelect
              animation={animation}
              index={currentQuestion}
              key={question.identifier}
              headline={question.headline}
              identifier={question.identifier}
              choices={question.choices}
              required={question.required}
            />
          );
        }
        return (
          <SingleSelect
            animation={animation}
            index={currentQuestion}
            key={question.identifier}
            headline={question.headline}
            identifier={question.identifier}
            choices={question.choices}
            required={question.required}
          />
        );
      }
      default: {
        return <></>;
      }
    }
  }, [currentQuestion]);

  return (
    <>
      <div>{QuestionView()}</div>
      <ButtonGroup>
        <Button
          data-testid="button-previous"
          onClick={handleClickPrevious}
          disabled={currentQuestion === 0 || state.invalidFlag}
        >
          Previous
        </Button>
        {!(currentQuestion === state.questionaire?.questions.length - 1) && (
          <Button
            data-testid="button-next"
            onClick={handleClickNext}
            disabled={state.invalidFlag}
          >
            Next
          </Button>
        )}
        {currentQuestion === state.questionaire?.questions.length - 1 && (
          <Button onClick={handleClickSubmit} disabled={state.invalidFlag}>
            Submit
          </Button>
        )}
      </ButtonGroup>
    </>
  );
};

export default Form;
