import { IChoice, IQuestionaire } from "../models";

interface ISetLoading {
    readonly type: 'SET_LOADING',
    payload: boolean
}

interface ISetValue {
    readonly type: 'SET_QUESTION_VALUE'
    payload: {
        index: number,
        value?: string | number
    }
}

interface INextQuestion {
    readonly type: 'SET_NEXT_QUESTION'
}

interface ISetState {
    readonly type: 'SET_STATE',
    payload: IQuestionaire
}

interface IPreviousQuestion {
    readonly type: 'SET_PREVIOUS_QUESTION'
}

interface ISetSelectChoices {
    readonly type: 'SET_SELECT_CHOICES'
    payload: {
        index: number,
        choice: IChoice[]
    }
}

interface ISubmitData {
    readonly type: 'SUBMIT_DATA'
    payload: IQuestionaire
}

interface ISetInvalidFlag {
    readonly type: 'SET_INVALID_FLAG'
    payload: boolean
}


export type tActions =
    | ISetLoading
    | ISetValue
    | INextQuestion
    | ISetState
    | IPreviousQuestion
    | ISetSelectChoices
    | ISubmitData
    | ISetInvalidFlag