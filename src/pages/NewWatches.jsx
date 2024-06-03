import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './findrolex.module.css'


function NewWatches() {
    useEffect(() => {
        Aos.init();
    }, [])
    const compo = [
        {
            video: "/images/bracelet4.webm",
            title: "The Collection",
            text: "Rolex Watch",
            link: "watchpage"
        },
        {
            video: "/images/newlaunch.mp4",
            title: "THE HARMONY OF CONTRASTS",
            text: "New Watches 2024",
            link: "newwatchpage"

        },
        {
            video: "/images/golf-rolex.webm",
            title: "ROLEX AND GOLF",
            text: "The Mater Tournament",
            link: "sportpage"

        },
        {
            video: "/images/find-rolex.webm",
            title: "Watch Making",
            text: "Excellence in the making",
            link: "rolexmakingpage"

        }

    ]
    return (
        <>
            {
                compo.map((value, index) => {
                    return (
                        <div key={index} className={styles.Bracelet}>
                            <div className={styles.braceletvideo}>
                                <video src={value.video} autoPlay muted loop className={styles.video}></video>
                            </div>
                            <div className={styles.yourturn} >
                                <div className={styles.yourtext} data-aos="fade-up">

                                    <h3>{value.title}</h3>
                                    <h1>{value.text}</h1>
                                </div>
                                <div className={styles.btn} data-aos="fade-up">

                                    <button>
                                        <Link to={value.link}>
                                            Learn More <FontAwesomeIcon icon={faAngleRight} />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default NewWatches