import React from "react";
import styles from "./carousel.module.css";

function Slide(props) {
  return (
    <div className={styles.slide}>
      <img src={props.src} alt="images" />
    </div>
  );
}

export default Slide;
