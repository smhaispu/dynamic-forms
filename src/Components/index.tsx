import React, { ReactElement } from "react";
import { IQuestionaire } from "../models";
import { StyledFormWrapper } from "./index.style";
import Form from "./layouts/Form";

const questionnaire: IQuestionaire = require("../questionnaire.json")
  .questionnaire;

const FormWrapper = (): ReactElement => {
  return (
    <>
      <StyledFormWrapper data-testid="form-wrapper">
        {questionnaire.questions && questionnaire.questions.length > 0 && (
          <Form />
        )}
      </StyledFormWrapper>
    </>
  );
};

export default FormWrapper;
