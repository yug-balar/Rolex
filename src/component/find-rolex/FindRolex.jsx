import React from 'react'
import styles from "./findrolex.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function FindRolex() {
    return (
        <div className={styles.Bracelet}>
            <div className={styles.braceletvideo}>
                <video src="/images/find-rolex.webm" autoPlay muted loop className={styles.video}></video>
            </div>
            <div className={styles.yourturn}>
                <div className={styles.yourtext}>

                    <h3>WATCH MAKING</h3>
                    <h1>Excellence in the making</h1>
                </div>
                <div className={styles.btn}>

                    <button>
                        <Link to="rolexmakingpage">
                            Learn More <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FindRolex