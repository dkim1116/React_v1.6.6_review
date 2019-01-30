import React from 'react';

import Row from './Row';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: Array(3).fill([]),
            player: 1
        }
    }

    nextMove = (rowId, columnId) => {
        return () => {
            var player = this.state.player === 1 ? 2 : 1;
            var board = this.state.board.slice();
            board[rowId][columnId] = this.state.player; 

            this.setState({ board })
            this.setState({ player });
            
        }
    }

    renderRows() {
        return this.state.board.map(function(x, i) {
            return <Row nextMove={this.nextMove} status={x} rowId={i} />;
        }, this);
    }

    render() {
        return (
            <div className="ui container">
                {this.renderRows()}
            </div>
        )
    }
}

export default Board;