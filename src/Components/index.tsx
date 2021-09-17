import React, { ReactElement } from "react";
import { IQuestionaire } from "../models";
import { FormWrapper } from "./index.style";
import Form from "./FormElements/Form";

const questionnaire: IQuestionaire = require("../questionnaire.json")
  .questionnaire;

interface Props {}

export default function ({}: Props): ReactElement {
  return (
    <>
      <FormWrapper data-testid="form-wrapper">
        {questionnaire.questions && questionnaire.questions.length > 0 && (
          <Form />
        )}
      </FormWrapper>
    </>
  );
}
