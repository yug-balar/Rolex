import React, { useEffect } from 'react'
import styles from "./buying.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Buyingpage() {

    useEffect(() => {
        Aos.init()
    })


    const buying = [
        {
            src: "/images/buying1.jpg",
            title: "Store locator",
            desc: "Rolex is present in some 100 countries around the world through more than 30 affiliates, a vast network of official jewelers and almost 900 service centers."
        },
        {
            src: "/images/buying2.jpg",
            title: "Sustainble development",
            desc: "At Rolex we are proud of our work and we believe that nothing beats experiencing first-hand the meticulous details, the balanced weight, the comfort and simply the feel of a Rolex."

        },
        {
            src: "/images/buying3.jpg",
            title: "History",
            desc: "Rolex advocates the durability of its products. Thanks to uncompromising quality standards, the brand produces watches with the longest possible lifespans."

        }

    ]
    return (
        <>
            <div className={styles.Bracelet}>
                <div className={styles.braceletvideo}>
                    <video src="/images/buyingwatch.webm" autoPlay muted loop className={styles.video}></video>
                </div>
                <div className={styles.yourturn}>
                    <div className={styles.yourtext}>

                        <h3>THE CHOICE OF A LIFETIME</h3>
                        <h1>Buying a Rolex</h1>
                    </div>

                </div>
            </div>
            <div className={styles.descContainer}>
                <div className={styles.title}>
                    <h1>New and genuine Rolex watches are exclusively sold by official Rolex Jewelers</h1>
                </div>
                <div className={styles.desc}>
                    <p className={styles.pTag}>All are guarantors of the quality and authenticity of Rolex watches.</p>
                    <p>The company ensures the distribution, sale and servicing of its watches according to strict quality standards.</p>
                </div>
            </div>
            {
                buying.map((item, index) => {
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

export default Buyingpage