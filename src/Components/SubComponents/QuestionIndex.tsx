import React, { ReactElement } from 'react'
import {Index}  from './QuestionIndex.style'
interface Props {
    index:number
}

function QuestionIndex({index}: Props): ReactElement {
   
    return (
        <Index>
            {Number(index + 1)}
        </Index>
    )
}

export default QuestionIndex
