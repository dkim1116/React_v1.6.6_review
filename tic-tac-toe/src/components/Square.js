import React from 'react';

const Square = (props) => {
    const squareStyle = {
        height: '150px',
        width: '150px',
        backgroundColor: 'lightgrey',
        margin: '5px 5px',
        display: 'inline-block',
        textAlign: 'center'
    };

    console.log(props);

    return (
        <div style={squareStyle}>
            {props.markedBy 
                ? <h1 style={{padding: '50px'}}>{props.markedBy[props.column]}</h1>
                : <h1></h1>}
        </div>
    );
          
}

export default Square;