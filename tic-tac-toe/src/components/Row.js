import React from 'react';
import Square from './Square';

const Row = (props) => {
    console.log(props)
    return (
        <div className="ui horizontal list">
            <div className="item">
            <Square markedBy={props.status} column={0} />
            <Square markedBy={props.status} column={1} />
            <Square markedBy={props.status} column={2} />
            </div>
        </div>
    )
}

export default Row;