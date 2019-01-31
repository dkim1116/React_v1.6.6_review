import React from 'react';

import Row from './Row';

const boardStyle = {
    position: 'static',
    left: '15%',
    top: '5%'
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: Array(3).fill(Array(3).fill()),
            player: 'X'
        }
    }

    nextMove = (rowId, columnId) => {
        var player = this.state.player === 'X' ? 'O' : 'X';
        
        this.setState((prevState) => {
            return { 
                board: prevState.board.map((row, rowIndex) => {
                    return row.map((square, squareIndex) => {
                        if (rowIndex === rowId &&
                            squareIndex === columnId) {
                                return this.state.player;
                            } else {
                                return square;
                            }
                    });
                }),
                player: player
            };
        });
    }

    renderRows() {
        return this.state.board.map(function(x, i) {
            return <Row nextMove={this.nextMove} status={x} rowId={i} />;
        }, this);
    }

    render() {
        return (
            <div>
                <table style={boardStyle}>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Board;