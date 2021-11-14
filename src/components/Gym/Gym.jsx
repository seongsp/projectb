import React from 'react'
import Court from '../Court/Court'
import styles from './Gym.module.css'



function Gym() {
    let numCourts = 6;
    let courts = [];
    
    for (let i = 0; i < numCourts; i++) {
        courts.push(<Court key={i+1} />)
    }

    return (
        <div className={styles.gym}>
            {
                courts
            }
        </div>
    )
}

export default Gym;
