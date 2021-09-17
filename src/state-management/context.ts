import React from 'react'
import { IQuestionaire } from '../models';
import { tActions } from './actions';
export interface IFormState {
    loading: boolean,
    questionaire: IQuestionaire,
    currentQuestion: number,
    animation: string,
    dataSubmited: boolean,
    invalidFlag: boolean
}

export interface IFormContext {
    state: IFormState,
    dispatch: React.Dispatch<tActions>
}

export const initialState: IFormContext = {
    state: {
        loading: true,
        animation: 'next',
        dataSubmited: false,
        invalidFlag:false,
        questionaire: {
            id: 0,
            identifier: 'dummy',
            name: 'dummy',
            questions: [],
            description: 'dummy',
            category_name_hyphenated: 'dummy'
        },
        currentQuestion: 0
    },
    dispatch: () => { }
}

export const Context = React.createContext<IFormContext>(initialState);