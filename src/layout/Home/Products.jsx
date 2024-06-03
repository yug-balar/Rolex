import React, { useState } from "react";
import styles from "../../styles/products.module.css";
import ProductsTab from "../../component/bracelet/products/productsTab/ProductsTab";
import ProductsGallery from "../../component/bracelet/products/productsGallery/ProductsGallery";

function Products() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsContainerInner}>
        <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductsGallery activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Products;
