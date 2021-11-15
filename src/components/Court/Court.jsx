import React from 'react';
import styles from './Court.module.css'
import Player from '../Player/Player';
import JoinCourt from './JoinCourt/JoinCourt';

function Court(props) {
    const {courtNum, playerList, waitList, handleJoinCourt} = props;
    
    console.log(courtNum)

    return (
        <div className={`${styles.court} ${styles.available}`}>
            <h2 className={styles.courtName}>Court {courtNum}</h2>
            <JoinCourt 
                handleJoinCourt={handleJoinCourt} 
                courtNum={courtNum} 
            />
            
            {
                playerList.map((player, idx) => (
                    <Player 
                        key={idx}
                        {...player} 
                    />
                ))
            }
            
        </div>
    )
}

export default Court;
