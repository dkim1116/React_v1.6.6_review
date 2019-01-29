import React from 'react';

import Row from './Row';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            one : ['X', 'A', 'AB'],
            two : [],
            three:  []
        }
    }

    render() {
        return (
            <div className="ui container">
                <Row status={this.state.one}/>
                <Row status={this.state.two} />
                <Row status={this.state.three} />
            </div>
        )
    }
}

export default Board;