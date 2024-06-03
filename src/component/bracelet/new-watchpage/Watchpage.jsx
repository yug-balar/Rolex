import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Products from '../../../layout/Home/Products'
import styles from "./watchpage.module.css"
import { Link } from 'react-router-dom'

function Watchpage() {

    return (
        <>


            <div >

                <div className={styles.container}>
                    <div className={styles.videocontainer}>
                        <video src="/images/bracelet4.webm" autoPlay muted loop className={styles.video}></video>
                    </div>
                    <div className={styles.frontText}>
                        <div className={styles.text}>

                            <h3>THE Collection</h3>
                            <h1>Rolex Watches</h1>
                        </div>
                        <div className={styles.btn}>
                            <button>
                                <Link to="/newwatchpage">
                                    Learn More <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                            </button>

                        </div>

                    </div>
                </div>
                <div className={styles.exploreContainer} >
                    <div className={styles.expolre}>
                        <h1>Explore the Rolex <br></br>collection</h1>
                    </div>
                    <div className={styles.desc}>
                        <p>The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.</p>
                        <button>Find your Rolex <FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                </div>
            </div>
            <Products />
        </>
    )
}

export default Watchpage