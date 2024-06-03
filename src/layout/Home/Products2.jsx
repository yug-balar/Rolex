import React, { useState } from "react";
import styles from "../../styles/products.module.css";
import ProductsGallery from "../../component/sports/products/productsGallery/ProductsGallery";

function Products2() {
  const [activeTab] = useState(0);
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsContainerInner}>
        <ProductsGallery activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Products2;
