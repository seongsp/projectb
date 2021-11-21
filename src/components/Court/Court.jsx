import React from 'react';
import styles from './Court.module.css'
import Player from '../Player/Player';

function Court(props) {
    const {courtNum, playerList, waitList, handleJoinCourt} = props;

    return (
        <div 
            className={`${styles.court} ${playerList.length < 4 ? styles.available : styles.occupied}`} 
            onClick = {
                () => handleJoinCourt("dummyname", courtNum)
            }>
            <h2 className={styles.courtName}>Court {courtNum}</h2>
            
            {
                playerList.map((player, idx) => (
                    <Player 
                        key={idx}
                        name={player}
                    />
                ))
            }
            
        </div>
    )
}

export default Court;
