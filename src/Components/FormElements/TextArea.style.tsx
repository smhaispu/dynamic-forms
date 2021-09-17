import styled from 'styled-components'
export const StyledTextAreaWrapper = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    scroll-snap-align:end;
`

export const StyledTextArea = styled.textarea`
    padding: 10px;
    font-size: 1rem;
    box-shadow: 1px 2px 0 0px #333;
    border-radius: 10px;
    resize: none;
    outline: none;
    margin: 15px;
    height: 150px;
    `
