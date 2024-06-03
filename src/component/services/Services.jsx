import React, { useEffect } from 'react'
import styles from "./services.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Services() {

    useEffect(() => {
        Aos.init()
    })

    const serv = [
        {
            src: "/images/service1.jpg",
            title: "Service center locater",
            desc: "Every Official Rolex Jeweler and Rolex affiliate is authorized to receive your Rolex watch for servicing."
        },
        {
            src: "/images/service2.jpg",
            title: "Servicing your Rolex",
            desc: "Rolex watches are exceptional. They are designed to function perfectly today, tomorrow and into the future."
        },
        {
            src: "/images/service3.jpg",
            title: "Caring for your Rolex",
            desc: "At Rolex we want to ensure that your watch performs as well throughout your life as on the day you bought it."
        }
    ]
    return (
        <>
            <div className={styles.Bracelet}>
                <div className={styles.braceletvideo}>
                    <video src="/images/services.webm" autoPlay muted loop className={styles.video}></video>
                </div>
                <div className={styles.yourturn}>
                    <div className={styles.yourtext}>

                        <h3>CARE AND SERVCING YOUR ROLEX</h3>
                        <h1>Quality and reliability</h1>
                    </div>

                </div>
            </div>

            <div className={styles.descContainer}>
                <div className={styles.title}>
                    <h1>Rolex watches are designed and built to last</h1>
                </div>
                <div className={styles.desc}>
                    <p className={styles.pTag}>Hans Wilsdorf instilled a philosophy of perpetual excellence on which the brand has forged its reputation.</p>
                    <p>From the outset, the founder of Rolex established a network of watchmaking workshops around the world, tasked with ensuring that all of the brand’s watches could receive the best possible servicing and so preserve their excellent technical performance and pristine appearance. As a result, there is no limit on how long a Rolex watch can keep working, being handed down from one generation to the next, and living several lives.</p>
                </div>
            </div>

            {
                serv.map((item, index) => {
                    return (

                        <div className={styles.mainContainer} key={index}>
                            <div className={styles.galleryCardContainer}>
                                <img src={item.src} alt="" />
                                <div className={styles.galleryCardDescContainer} data-aos="fade-up">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Services