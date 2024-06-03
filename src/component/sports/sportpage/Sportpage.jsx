import React from 'react'
import styles from "./sportpage.module.css"
import Products2 from '../../../layout/Home/Products2'

function Sportpage() {
    return (
        <>
            <div className={styles.Bracelet}>
                <div className={styles.braceletvideo}>
                    <video src="/images/golf-rolex.webm" autoPlay muted loop className={styles.video}></video>
                </div>
                <div className={styles.yourturn}>
                    <div className={styles.yourtext}>

                        <h3>ROLEX AND GOLF</h3>
                        <h1>The Mater Tournament</h1>
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
            <Products2 />
        </>
    )
}

export default Sportpage