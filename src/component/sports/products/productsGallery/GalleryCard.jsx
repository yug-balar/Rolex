import React, { useEffect } from "react";
import styles from "./productsGallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function GalleryCard(props) {
  useEffect(() => {
    Aos.init();
  })
  return (
    <div className={styles.mainContainer}>
      <div className={styles.galleryCardContainer}>
        <img src={props.src} alt="" />
        <div className={styles.galleryCardDescContainer} data-aos="fade-up">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <button className={styles.btn}>Discover more <FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
