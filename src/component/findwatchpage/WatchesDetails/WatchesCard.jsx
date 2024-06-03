import React, { useEffect } from 'react'
import styles from "./WatchesGallery.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Aos from 'aos'
import 'aos/dist/aos.css'



function WatchesCard(props) {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className={styles.container} data-aos="fade-up">

            <div className={styles.mainContainer}>
                <div className={styles.galleryCardContainer}>
                    <div className={styles.descContainer}>
                        <div>
                            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                        </div>
                        <div className={styles.galleryCardDescContainer}>
                            <h3>{props.desc}</h3>
                            <p>{props.title}</p>
                        </div>
                    </div>
                    <div className={styles.ImgContainer} >
                        <img src={props.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchesCard