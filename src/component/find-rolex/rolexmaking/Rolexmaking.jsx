import React from 'react'
import styles from "./rolexmaking.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Makingcard from '../rolexmakingcard/Makingcard'
function Rolexmaking() {
    return (
        <>

            <div className={styles.Bracelet}>
                <div className={styles.braceletvideo}>
                    <video src="/images/videoplayback.mp4" autoPlay muted loop className={styles.video}></video>
                </div>
                <div className={styles.yourturn}>
                    <div className={styles.yourtext}>

                        <h3>WATCH MAKING</h3>
                        <h1>Excellence in the making</h1>
                    </div>

                </div>
            </div>
            <div className={styles.descContainer}>
                <div className={styles.title}>
                    <h1>A perpetual quest</h1>
                </div>
                <div className={styles.desc}>
                    <p className={styles.pTag}>Rolex supports a vast array of sporting disciplines, including equestrianism, golf, motor sport, tennis and yachting.</p>
                    <p>The wide-ranging partnerships with major competitions and athletes – both established champions and promising young talent – reflect the extent of Rolex’s involvement in the world of sport. These disciplines uphold cherished brand values, making this commitment part of a long-term strategy to help inspire young generations and instil in them a competitive spirit, the hunger for a challenge and the continuous pursuit of excellence.</p>
                </div>
            </div>
            <Makingcard />
        </>
    )
}

export default Rolexmaking