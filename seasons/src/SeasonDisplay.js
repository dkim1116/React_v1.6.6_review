import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        displayText: 'It is likely that the weather is hot.',
        iconName: 'sun'
    },
    winter: {
        displayText: 'It is likely that the weather is freezing.',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'; // Northern hemisphere
    } else {
        return lat > 0 ? 'winter' : 'summer'; // Southern hemisphere
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { displayText, iconName } = seasonConfig[season]; // deconstructing the configuration object

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{displayText}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;