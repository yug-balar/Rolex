import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import styles from "./makingcard.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Makingcard(props) {

    useEffect(() => {
        Aos.init()
    })
    const making = [
        {
            src: "/images/mak1.jpg",
            title: "At the core of excellence",
            desc: 'Emblematic words,integrated know-how and a singular vision of watchmaking.'
        },
        {
            src: "/images/mak2.jpg",
            title: "Behind the seal",
            desc: "Every Rolex watch is Designed, produced and tested  with constant attension to the tiniest of details."
        },
        {
            src: "/images/mak3.jpg",
            title: "The anatomy of a Rolex",
            desc: 'Everything you always wanted to know about Rolex Watches.'
        }
    ]
    return (
        <>
            {
                making.map((item, index) => {
                    return (

                        <div className={styles.mainContainer}>
                            <div className={styles.galleryCardContainer}>
                                <img src={item.src} alt="" />
                                <div className={styles.galleryCardDescContainer} data-aos="fade-up">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <button className={styles.btn}>Discover more <FontAwesomeIcon icon={faAngleRight} /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </>
    )
}

export default Makingcard