import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.loadMessage}</div>
        </div>
    )
};

Spinner.defaultProps = {
    loadMessage: 'Loading...'
};

export default Spinner;