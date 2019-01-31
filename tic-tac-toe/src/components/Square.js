import React from 'react';

const Square = (props) => {
    const squareStyle = {
        height: '100px',
        width: '90px',
        backgroundColor: 'lightgrey',
        margin: '5px 5px',
        display: 'inline-block',
        position: 'relative'
    };

    const textStyle = {
        marginTop: '33%',
        textAlign: 'center', 
        verticalAlign: 'middle'
    }

    return (
        <td onClick={() => props.nextMove(props.rowId, props.column)} style={squareStyle}>
            {props.markedBy 
                ? <h1 style={textStyle}>{props.markedBy[props.column]}</h1>
                : <h1 style={textStyle}></h1>}
        </td>
    );
          
}

export default Square;