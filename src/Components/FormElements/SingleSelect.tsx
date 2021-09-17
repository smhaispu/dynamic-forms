import React, { useContext, useEffect, useState } from "react";
import { ISelect } from "../../models";
import { Context } from "../../state-management/context";
import { Label, SlidePrevious, SlideNext } from "../index.style";
import QuestionIndex from "../SubComponents/QuestionIndex";
import {
  SingleSelectWrapper,
  StyledSingleSelect,
  GroupedRadio,
  InputWrapper,
  RadioDescription,
} from "./SingleSelect.style";

const SingleSelect = ({
  headline,
  identifier,
  choices,
  required,
  index,
  animation,
}: ISelect) => {
  const { dispatch } = useContext(Context);
  const [value, setValue] = useState(choices);

  const onHandleChange = (index: number) => {
    const valueRef = [...value];
    valueRef.forEach((val) => {
      val.selected = false;
    });
    valueRef[index].selected = !value[index].selected;
    setValue(valueRef);
  };
  const onHandleClick = (index: number) => {
    const valueRef = [...value];
    valueRef.forEach((val) => {
      val.selected = false;
    });
    setValue(valueRef);
  };

  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_SELECT_CHOICES",
        payload: {
          choice: value,
          index,
        },
      });
    };
  }, []);

  useEffect(() => {
    if (required) {
      const isValid = value.some((val) => val.selected);
      if (!isValid) {
        dispatch({ type: "SET_INVALID_FLAG", payload: true });
      } else {
        dispatch({ type: "SET_INVALID_FLAG", payload: false });
      }
    }
  }, [value]);

  const SingleSelectContainer = () => (
    <SingleSelectWrapper>
      <QuestionIndex index={index} />
      <Label>
        {headline}
        {required ? " *" : ""}
      </Label>
      <GroupedRadio>
        {value.length > 0 &&
          value.map((choice, idx) => {
            return (
              <InputWrapper key={choice.label}>
                <StyledSingleSelect
                  type="radio"
                  id={choice.label}
                  name={identifier}
                  checked={choice.selected}
                  onChange={() => onHandleChange(idx)}
                  onClick={() => onHandleClick(idx)}
                />
                <RadioDescription>{choice.value}</RadioDescription>
              </InputWrapper>
            );
          })}
      </GroupedRadio>
    </SingleSelectWrapper>
  );

  return animation === "next" ? (
    <SlideNext>
      <SingleSelectContainer />
    </SlideNext>
  ) : (
    <SlidePrevious>
      <SingleSelectContainer />
    </SlidePrevious>
  );
};

export default React.memo(SingleSelect);
