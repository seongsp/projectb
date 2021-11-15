import React from 'react';

function Player(props) {
    const {name} = props;

    return (
        <div>
            Player Name: {name}
        </div>
    )
}

export default Player;
