import React from 'react';
import Square from './Square';

const Row = (props) => {
    return (
        <div>
            <div className="item">
                <Square nextMove={props.nextMove} rowId={props.rowId} markedBy={props.status} column={0} />
                <Square nextMove={props.nextMove} rowId={props.rowId} markedBy={props.status} column={1} />
                <Square nextMove={props.nextMove} rowId={props.rowId} markedBy={props.status} column={2} />
            </div>
        </div>
    )
}

export default Row;