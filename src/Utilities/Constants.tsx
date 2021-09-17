import { IQuestionaire } from "../models";
import { Context } from "../state-management/context";
import { render } from "@testing-library/react";

const questionnaire: IQuestionaire = require("../questionnaire.json")
  .questionnaire;

export const testingInitialState = {
  state: {
    loading: false,
    animation: "next",
    dataSubmited: false,
    invalidFlag: false,
    questionaire: questionnaire,
    currentQuestion: 0,
  },
  dispatch: () => {},
};

export const customRender = ({ Component, initialState }: any) => {
  return render(
    <Context.Provider value={{ ...initialState }}>{Component}</Context.Provider>
  );
};
