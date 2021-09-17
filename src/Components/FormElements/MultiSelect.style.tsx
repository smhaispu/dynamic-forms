import styled from 'styled-components'
export const MultiSelectWrapper = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    scroll-snap-align:start;
`;

export const StyledMultiSelect = styled.input`
    -webkit-appearance: none;
    background-color: #fafafa;
    border: 1px solid #cacece;
    box-shadow: 0 1px 2px rgb(0 0 0 / 5%), inset 0px -15px 10px -12px rgb(0 0 0 / 5%);
    padding: 9px;
    margin-right: 10px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    z-index:1;
    &:checked {
        background-color: #e9ecee;
        border: 1px solid #adb8c0;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
        color: #99a1a7;
        background-color:black;
    }
    `;
export const GroupedRadio = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:15px;
`;

export const InputWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
`;

export const RadioDescription = styled.div`
    font-size:1rem;
`;