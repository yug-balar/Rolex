import React, { useState } from 'react'
import styles from "../../styles/products.module.css";
import WatchesGallery from '../../component/findwatchpage/WatchesDetails/WatchesGallery';


function WatchesPageDetail() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className={styles.productsContainer}>
            <div className={styles.productsContainerInner}>
                <WatchesGallery activeTab={activeTab} />
            </div>
        </div>)
}

export default WatchesPageDetail