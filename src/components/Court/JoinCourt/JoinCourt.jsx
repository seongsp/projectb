import React from 'react'

function JoinCourt(props) {
    const {handleJoinCourt, courtNum} = props;

    return (
        <button 
            className="joincourt-btn"
            onClick = {
                () => handleJoinCourt("dummyname", courtNum)
            }
        >
        JoinCourt
        </button>  
    )
}

export default JoinCourt