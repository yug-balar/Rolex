import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import styles from "./twocard.module.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

function Twocard(props) {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className={styles.container} data-aos="fade-up">

            <div className={styles.ImgContainer} >
                <img src={props.src} alt="" />
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.galleryCardContainer}>
                    <div className={styles.descContainer}>

                        <div className={styles.galleryCardDescContainer}>
                            <h3>{props.desc}</h3>
                            <p>{props.title}</p>
                        </div>
                        <div className={styles.btn}>
                            <button>Discover more <FontAwesomeIcon icon={faGreaterThan} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Twocard