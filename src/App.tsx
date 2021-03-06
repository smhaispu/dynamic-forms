import "./App.css";
import React, { useEffect } from "react";
import { FormReducer } from "./state-management/reducer";
import { Context, initialState } from "./state-management/context";
import Loader from "./utilities/Loader";
import QuestionForm from "./components/index";
import { IQuestionaire } from "./models";
import Header from "./components/layouts/Header";
import DataSubmitted from "./components/layouts/DataSubmitted";
const questionnaire: IQuestionaire = require("./questionnaire.json")
  .questionnaire;
function App() {
  const [state, dispatch] = React.useReducer(FormReducer, initialState.state);

  useEffect(() => {
    dispatch({ type: "SET_STATE", payload: questionnaire });
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    }, 1000);
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {!state.loading && (
        <Header
          headline={questionnaire.name}
          description={questionnaire.description}
        />
      )}
      {!state.loading && !state.dataSubmited && <QuestionForm />}
      {!state.loading && state.dataSubmited && (
        <DataSubmitted data-testid="data-submitted" />
      )}
      {state.loading && <Loader />}
    </Context.Provider>
  );
}

export default App;
