import React, { useEffect } from 'react'
import styles from "./aboutRolex.module.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import "aos/dist/aos.css";



function AboutRolex() {
    useEffect(() => {
        Aos.init();
    }, [])

    const data = [
        {
            src: "/images/about5.jpg",
            title: "Sustainble development",
            desc: "Long-term vision is at the heart of our philosophy and our various activities."
        },
        {
            src: "/images/about6.jpg",
            title: "Behind the crown",
            desc: "Rolex's innovarion have indeliby marked the history of globle watchmaking  and bear witness to its founder's undending quest for execellence."
        },
        {
            src: "/images/about7.jpg",
            title: "History",
            desc: "The History of Rolex is inextricably linked to the visionary spirit of Hans Wilsdorf, its founder"
        }
    ]
    return (
        <>
            <div className={styles.Bracelet}>
                <div className={styles.braceletvideo}>
                    <img src="/images/about.jpg" className={styles.video} alt='about' />
                </div>
                <div className={styles.yourturn}>
                    <div className={styles.yourtext}>

                        <h3>#PERPETUAL</h3>
                        <h1>About Rolex</h1>
                    </div>

                </div>
            </div>

            <div className={styles.descContainer}>
                <div className={styles.title}>
                    <h1>An unrivalled reputation for quality and expertise</h1>
                </div>
                <div className={styles.desc}>
                    <p className={styles.pTag}>Rolex is an integrated and independent Swiss watch manufacture. Headquartered in Geneva, it is recognized for its expertise and the quality of its products.</p>
                    <p>Hans Wilsdorf, founder of the company, instilled a notion of perpetual excellence, leading to major watchmaking innovations, such as the Oyster, the first waterproof wristwatch and the Perpetual rotor self-winding mechanism. The brand designs, develops and produces the majority of its watch components in-house. Rolex also supports the arts and culture, sport, exploration, and those who are devising solutions to preserve the planet. It is a committed and responsible company whose products are made to last. In its quest for excellence, Rolex strives each day to improve not only its watches but also its environmental performance and its impact on society.</p>
                </div>
            </div>
            {data.map((value, index) => {
                return (
                    <div className={styles.mainContainer} key={index}>
                        <div className={styles.galleryCardContainer}>
                            <img src={value.src} alt="" />
                            <div className={styles.galleryCardDescContainer} data-aos="fade-up">
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                                <button className={styles.btn}>Discover more <FontAwesomeIcon icon={faAngleRight} /></button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>)

}

export default AboutRolex