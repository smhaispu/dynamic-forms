import React, { useContext, useEffect, useState } from "react";
import { Input, StyledTextBox } from "./TextBox.style";
import { Label, SlideNext, SlidePrevious } from "../index.style";
import { ITextProps } from "../../models";
import QuestionIndex from "../SubComponents/QuestionIndex";
import { Context } from "../../state-management/context";

const TextBox = ({
  value,
  headline,
  required,
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
          value: textVal,
          index,
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

  const TextBoxContent = (
    <StyledTextBox>
      <QuestionIndex index={index} />
      <Label>
        {headline} {required ? " *" : ""}
      </Label>
      <Input
        type="text"
        value={textVal}
        required={required}
        placeholder={"Please enter value here..."}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </StyledTextBox>
  );
  return animation === "next" ? (
    <SlideNext>{TextBoxContent}</SlideNext>
  ) : (
    <SlidePrevious>{TextBoxContent}</SlidePrevious>
  );
};

export default React.memo(TextBox);
