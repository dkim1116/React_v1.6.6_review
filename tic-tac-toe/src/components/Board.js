import React from 'react';

import Row from './Row';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: Array(3).fill(Array(3).fill(null)),
            player: 'X'
        }
    }

    nextMove = (rowId, columnId) => {
        var player = this.state.player === 'X' ? 'X' : 'Y';

        this.setState({ player });
        this.setState((prevState) => {
            board: prevState.board.map((row, rowIndex) => {
                return row.map((square, squareIndex) => {
                    if (rowIndex === rowId &&
                        squareIndex === columnId) {
                            return this.state.player;
                        } else {
                            return square;
                        }
                })
            })
        });
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