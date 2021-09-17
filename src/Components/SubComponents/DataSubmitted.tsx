import React from 'react'
import {StyledMessage} from './DataSubmitted.style'
import mainLogo from'../../Assets/done.png';
const DataSubmitted = () => {
    return (
        <StyledMessage>
            <div>
                <img src={mainLogo}/>
            </div>
            <div>
            Form Submitted Successfully!
            </div>
        </StyledMessage>
    )
}

export default DataSubmitted
