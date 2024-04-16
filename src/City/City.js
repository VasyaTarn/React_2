import React from 'react'
import styles from './City.css';

function City() {
    return (
        <div className={styles.container}>
            <h1>Paris</h1>
            <h2>France</h2>
            <h2>3rd century BCE</h2>
            <img src="imgs/Tower.jpg" alt="" />
        </div>
    )
}

export default City