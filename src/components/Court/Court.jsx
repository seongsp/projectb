import React, { useState } from 'react';
import Player from '../Player/Player';
import JoinCourt from './JoinCourt/JoinCourt';

function Court(props) {
    const {courtNum, playerList, waitList, handleJoinCourt} = props;
    
    return (
        <div className="court">
            Court {courtNum}
            <JoinCourt 
                handleJoinCourt={handleJoinCourt} 
                courtNum={courtNum} 
            />
            {
                playerList.map((player) => (
                    <Player {...player} />
                ))
            }
        </div>
    )
}

export default Court;
