import React, { useEffect, useState } from 'react';
import Court from '../Court/Court';
import styles from './Gym.module.css';
import generateName from '../../scripts/GenerateRandomName';

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
        // generates a random name for now
        let randomName = generateName();
        console.log(randomName);
        
        if (courtList[courtNum - 1].playerList.length === 4) {
            // push to waitList
            const courts = [...courtList];
            courts[courtNum].waitList.push(randomName);
            setCourtList(courts);
        } else {
            // push to playerList
            const courts = [...courtList];
            courts[courtNum - 1].playerList.push(randomName);
            setCourtList(courts);
        }
    };

    useEffect(() => {
        setUpCourts();
    }, []);
    
    return (
        <div id="gym-section" className={styles.gym}>
            {
                courtList.map((court, idx) => (
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
