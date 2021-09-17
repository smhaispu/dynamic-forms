import React, { useContext, useEffect, useState } from "react";
import { ITextProps } from "../../models";
import { Label, SlidePrevious, SlideNext } from "../index.style";
import { StyledTextAreaWrapper, StyledTextArea } from "./TextArea.style";
import QuestionIndex from "../layouts/QuestionIndex";
import { Context } from "../../state-management/context";

const TextArea = ({
  value,
  required,
  headline,
  index,
  animation,
}: ITextProps) => {
  const [textVal, setValue] = useState(value);
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_QUESTION_VALUE",
        payload: {
          index,
          value: textVal,
        },
      });
    };
  }, []);

  useEffect(() => {
    if (required) {
      if (!textVal) {
        dispatch({ type: "SET_INVALID_FLAG", payload: true });
      } else {
        dispatch({ type: "SET_INVALID_FLAG", payload: false });
      }
    }
  }, [textVal]);

  const TextAreaContent = (
    <StyledTextAreaWrapper>
      <QuestionIndex index={index} />
      <Label>
        {headline} {required ? " *" : ""}
      </Label>
      <StyledTextArea
        onChange={(e: any) => setValue(e.target.value)}
        value={textVal}
        required={required}
        placeholder={"Please enter value here..."}
      />
    </StyledTextAreaWrapper>
  );
  return animation === "next" ? (
    <SlideNext>{TextAreaContent}</SlideNext>
  ) : (
    <SlidePrevious>{TextAreaContent}</SlidePrevious>
  );
};

export default React.memo(TextArea);
