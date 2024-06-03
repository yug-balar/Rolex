import React from 'react'
import styles from "./newwatchpage.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import WatchList from '../watchLIst/WatchList'
import { motion } from 'framer-motion'


function NewWatchPage() {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.videocontainer}>
                    <video src="/images/newlaunch.mp4" autoPlay muted loop className={styles.video}></video>
                </div>
                <div className={styles.frontText} >
                    <motion.div initial={{ height: 0 }}
                        animate={{ height: "10%" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className={styles.text}>
                        <h3>THE HARMONY OF CONTRASTS</h3>
                        <h1>New Watches 2024</h1>
                    </motion.div>
                    <div className={styles.btn}>

                        <button>
                            <Link to="">
                                Learn More <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                        </button>
                    </div>
                </div>
            </div >
            <div className={styles.descContainer}>
                <div className={styles.title}>
                    <h1>With its latest creations, Rolex brings a fresh new look to some of its most iconic models.</h1>
                </div>
                <div className={styles.desc}>
                    <p>Offering unique harmonies of materials, colours and textures, the 2024 watches illustrate our desire to constantly reawaken watchmaking emotions, while demonstrating uncompromising quality down to the smallest detail. Thanks to our in-house mastery of watchmaking expertise, the new watches play with contrasts to achieve a harmonious balance of functionality and aesthetics, performance and preciousness, tradition and innovation.</p>
                </div>
            </div>
            <WatchList />
        </>
    )

}

export default NewWatchPage