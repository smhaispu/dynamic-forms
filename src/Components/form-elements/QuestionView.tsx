import React from "react";
import TextBox from "./TextBox";
import TextArea from "./TextArea";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import { IQuestion } from "../../models";

interface IQuestionView {
  question: IQuestion;
  animation: string;
  currentQuestion: number;
}
const QuestionView = ({
  question,
  animation,
  currentQuestion,
}: IQuestionView) => {
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
};

export default QuestionView;
