import React from 'react';

const ValidationComponent = (props) => {
    const textLengthValidation = () => {
        return (
            <div>
                {props.textLength < 5 && <span>Text too short</span>}
                {props.textLength >= 5 && <span>Text too enough</span>}
            </div>
        )
    }

    return (
        <div>
            {textLengthValidation()}
        </div>
    )
}

export default ValidationComponent;