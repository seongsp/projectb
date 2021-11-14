import React, { useState } from 'react'
import styles from './Court.module.css'



function Court() {
    return (
        <div className={`${styles.court} ${styles.available}`}>
            <h2 className={styles.courtName}>Court #1</h2>
            <p className={styles.playerName}>Chuck Choi</p>
            <p className={styles.playerName}>Seongsu Park</p>
            <p className={styles.playerName}>Miae Park</p>
            <p className={styles.playerName}>Kyong Ae Kim</p>
        </div>
    )
}

export default Court
