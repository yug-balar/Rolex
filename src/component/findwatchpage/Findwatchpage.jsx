import React from 'react'
import WatchesPageDetail from '../../layout/Home/WatchesPageDetail'
import styles from "./findwatchpage.module.css"


function Findwatchpage() {
    return (
        <>

            <div className={styles.Container}>
                <div className={styles.Watches}>
                    <h1 style={{ textAlign: "center" }}>ROLEX WATHCES</h1>
                </div>
                <div className={styles.Models} style={{ textAlign: "center" }}>
                    <h1>All models</h1>
                </div>
            </div>

            <WatchesPageDetail />
        </>
    )
}

export default Findwatchpage