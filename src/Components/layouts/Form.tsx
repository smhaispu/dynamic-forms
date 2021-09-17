import React, { useContext } from "react";

import { Context } from "../../state-management/context";
import { Button, ButtonGroup } from "../index.style";
import QuestionView from "../form-elements/QuestionView";

const Form = () => {
  const { state, dispatch } = useContext(Context);
  const { currentQuestion, animation } = state;
  const question = state.questionaire?.questions?.[currentQuestion];

  const handleClickNext = () => {
    dispatch({ type: "SET_NEXT_QUESTION" });
  };
  const handleClickPrevious = () => {
    dispatch({ type: "SET_PREVIOUS_QUESTION" });
  };

  const handleClickSubmit = () => {
    dispatch({ type: "SUBMIT_DATA", payload: state.questionaire });
  };

  return (
    <>
      <QuestionView
        animation={animation}
        question={question}
        currentQuestion={currentQuestion}
      />
      <ButtonGroup>
        <Button
          data-testid="button-previous"
          onClick={handleClickPrevious}
          disabled={currentQuestion === 0}
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
          <Button
            data-testid="button-submit"
            onClick={handleClickSubmit}
            disabled={state.invalidFlag}
          >
            Submit
          </Button>
        )}
      </ButtonGroup>
    </>
  );
};

export default Form;
