import React, { useState } from 'react';
import styles from './Court.module.css'
import Player from '../Player/Player';
import JoinCourt from './JoinCourt/JoinCourt';

function Court(props) {
    const {courtNum, playerList, waitList, handleJoinCourt} = props;
    
    return (
        <div className={`${styles.court} ${styles.available}`}>
            <h2 className={styles.courtName}>Court {courtNum}</h2>
            <JoinCourt 
                handleJoinCourt={handleJoinCourt} 
                courtNum={courtNum} 
            />
            {/* {
                playerList.map((player) => (
                    <Player {...player} />
                ))
            } */}
        </div>
    )
}

export default Court;
