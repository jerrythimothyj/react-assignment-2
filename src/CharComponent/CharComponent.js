import React from 'react';
import './CharComponent.css';

const CharComponent = props => (
    <div className="CharComponent"
         onClick={props.deleteChar}
    >
        {props.char}
    </div>
);

export default CharComponent;
