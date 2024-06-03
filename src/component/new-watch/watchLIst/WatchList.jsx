import React, { useEffect } from 'react'
import styles from "./watchlist.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'


function WatchList() {

    useEffect(() => {
        Aos.init();
    }, [])

    const watches = [
        {
            src: "/images/gmt.png",
            text: "GMT-Master II",
            desc: "Echoning emotions"
        },
        {
            src: "/images/day-date1.png",
            text: "Day-Date",
            desc: "Harmonious veriations"
        },
        {
            src: "/images/1980.png",
            text: "1908",
            desc: "Elegence in movement"
        },
        {
            src: "/images/deepsea.png",
            text: "Rolex Deepsea",
            desc: "Bringing light to the deep"
        },
        {
            src: "/images/daytona2.png",
            text: "Cosmograph Daytona",
            desc: "An icon eternally revisited"
        },
        {
            src: "/images/dweller.png",
            text: "Sky-Dweller",
            desc: "The symphony of reflection"
        }
    ]
    return (
        <div className={styles.mainContainer}>
            {
                watches.map((value, index) => {
                    return (
                        <div key={index}>
                            <div className={styles.watchContainer1}>
                                <div className={styles.imgContainer}>
                                    <img src={value.src} />
                                </div>
                                <div className={styles.decsContainer} data-aos="fade-up">
                                    <h2>{value.text}</h2>
                                    <h3>{value.desc}</h3>
                                </div>
                            </div>
                            <div className={styles.lineContainer}>
                                <img src="/images/line2.png" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WatchList