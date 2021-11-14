import React from 'react'
import Court from '../Court/Court'



function Gym() {
    let numCourts = 6;
    let courts = [];
    
    for (let i = 0; i < numCourts; i++) {
        courts.push(<Court key={i+1} />)
    }

    return (
        <div style={{ display: 'flex' }}>
            {
                courts
            }
        </div>
    )
}

export default Gym;
