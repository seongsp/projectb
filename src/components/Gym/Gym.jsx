import React, { useEffect, useState } from 'react';
import Court from '../Court/Court';
import styles from './Gym.module.css'

function Gym() {
    const [courtList, setCourtList] = useState([]);

    function setUpCourts() {
        let numCourts = 6;
        let courts = [];
    
        for (let i = 0; i < numCourts; i++) {
            courts.push({
                courtNum: i + 1,
                playerList: [],
                waitList: []
            });
        }
        setCourtList(courts);
    }

    function handleJoinCourt (name, courtNum) {
        console.log(name, courtNum);
        if (courtList[courtNum - 1].playerList.length === 4) {
            // push to waitList
            const courts = [...courtList];
            courts[courtNum].waitList.push(name);
            setCourtList(courts);
        } else {
            // push to playerList
            const courts = [...courtList];
            courts[courtNum].playerList.push(name);
            setCourtList(courts);
        }
    };

    useEffect(() => {
        setUpCourts();
    }, []);

    return (
        <div id="gym-section" className={styles.gym}>
            {
                courtList.map((idx, court) => (
                    <Court
                        key={idx}
                        {...court}
                        handleJoinCourt={handleJoinCourt}
                    />
                ))
            }
        </div>
    )
}

export default Gym;
