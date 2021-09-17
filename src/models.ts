export interface IChoice {
    label: string,
    value: string,
    selected: boolean
}

export interface IQuestionList {
    question_type: "text" | "multiple-choice",
    identifier: string,
    headline: string,
    description: string | null,
    required: boolean,
    multiline: boolean,
    choices: IChoice[]
    jumps: [],
    multiple: boolean
    value?: string | number
}


export interface IQuestionaire {
    id: number,
    identifier: string,
    name: string,
    questions: IQuestionList[],
    description: string,
    category_name_hyphenated: string
}

export interface ITextProps {
    required: boolean,
    headline: string,
    index: number,
    animation: string,
    value?: string | number
}

export interface ISelect {
    headline: string,
    identifier: string,
    choices: IChoice[],
    required: boolean,
    index: number,
    animation: string
}