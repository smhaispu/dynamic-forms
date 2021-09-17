import { tActions } from "./actions";
import { IFormState } from "./context";

export const FormReducer = function (state: IFormState, action: tActions) {
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                loading: action.payload
            }
        }
        case 'SET_STATE': {
            return {
                ...state,
                questionaire: action.payload
            }
        }
        case 'SUBMIT_DATA': {
            return {
                ...state,
                questionaire: action.payload,
                dataSubmited: true
            }
        }

        case 'SET_NEXT_QUESTION': {
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                animation: 'next'
            }
        }
        case 'SET_PREVIOUS_QUESTION': {
            return {
                ...state,
                currentQuestion: state.currentQuestion - 1,
                animation: 'previous'
            }
        }

        case 'SET_SELECT_CHOICES': {
            const questionValues = [...state.questionaire.questions];
            questionValues[action.payload.index].choices = action.payload.choice;
            return {
                ...state,
                questionaire: {
                    ...state.questionaire,
                    questions: [...questionValues]
                }
            }
        }
        

        case 'SET_QUESTION_VALUE': {
            const questionValues = [...state.questionaire.questions];
            questionValues[action.payload.index].value = action.payload.value;
            return {
                ...state,
                questionaire: {
                    ...state.questionaire,
                    questions: [...questionValues]
                }
            }
        }
        case 'SET_INVALID_FLAG':{
            return {
                ...state,
                invalidFlag:action.payload
            }
        }
        default:
            return state;
    }
}