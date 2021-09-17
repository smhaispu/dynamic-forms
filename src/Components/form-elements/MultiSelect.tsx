import React, { useContext, useEffect, useState } from "react";
import { ISelect } from "../../models";
import { Context } from "../../state-management/context";
import { Label, SlidePrevious, SlideNext } from "../index.style";
import QuestionIndex from "../layouts/QuestionIndex";
import {
  MultiSelectWrapper,
  StyledMultiSelect,
  GroupedRadio,
  InputWrapper,
  RadioDescription,
} from "./MultiSelect.style";

const MultiSelect = ({
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
    valueRef[index].selected = !value[index].selected;
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

  const MultiSelectContainer = () => (
    <MultiSelectWrapper data-testid={identifier}>
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
                <StyledMultiSelect
                  type="checkbox"
                  id={choice.label}
                  name={identifier}
                  value={choice.value}
                  checked={choice.selected}
                  onChange={() => onHandleChange(idx)}
                />
                <RadioDescription>{choice.value}</RadioDescription>
              </InputWrapper>
            );
          })}
      </GroupedRadio>
    </MultiSelectWrapper>
  );

  return animation === "next" ? (
    <SlideNext>
      <MultiSelectContainer />
    </SlideNext>
  ) : (
    <SlidePrevious>
      <MultiSelectContainer />
    </SlidePrevious>
  );
};

export default React.memo(MultiSelect);
