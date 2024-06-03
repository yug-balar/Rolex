import React, { useEffect } from 'react'
import styles from "./perpetualpage.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Perpetualpage() {
    useEffect(() => {
        Aos.init()
    })

    const perpe = [
        {
            src: "/images/about5.jpg",
            title: "Perpetual planet intiative",
            desc: "For almost a century, Rolex has accompanied explorers and over the years has moved from championing pure discovery to exploration for the sake of protecting the planet."
        },
        {
            src: "/images/perpetual1.jpg",
            title: "Perpetual Arts initiative",
            desc: "Rolex supports artistic excellence and is helping to pass knowledge to future generations, making a lasting contribution to culture worldwide."
        }
    ]
    return (
        <>
            <div className={styles.Bracelet}>
                <div className={styles.braceletvideo}>
                    <video src="/images/perpetual2.webm" autoPlay muted loop className={styles.video}></video>
                </div>
                <div className={styles.yourturn}>
                    <div className={styles.yourtext}>

                        <h3>SHAPING TOMMOROW'S WORLD</h3>
                        <h1>Rolex perpetual initiative</h1>
                    </div>

                </div>
            </div>

            <div className={styles.descContainer}>
                <div className={styles.title}>
                    <h1>A long-term commitment</h1>
                </div>
                <div className={styles.desc}>
                    <p className={styles.pTag}>Rolex supports a vast array of sporting disciplines, including equestrianism, golf, motor sport, tennis and yachting.</p>
                    <p>The wide-ranging partnerships with major competitions and athletes – both established champions and promising young talent – reflect the extent of Rolex’s involvement in the world of sport. These disciplines uphold cherished brand values, making this commitment part of a long-term strategy to help inspire young generations and instil in them a competitive spirit, the hunger for a challenge and the continuous pursuit of excellence.</p>
                </div>
            </div>
            {
                perpe.map((value, index) => {
                    return (

                        <div className={styles.mainContainer} key={index} >
                            <div className={styles.galleryCardContainer}>
                                <img src={value.src} alt="" />
                                <div className={styles.galleryCardDescContainer} data-aos="fade-up">
                                    <h3>{value.title}</h3>
                                    <p>{value.desc}</p>
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </>
    )
}

export default Perpetualpage