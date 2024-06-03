import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryCard from "./GalleryCard";
import {
  Sport
} from "../../../../data/productsPageData";

function ProductsGallery(props) {
  const { activeTab } = props;
  const products = [
    Sport
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1 }}>
      <Masonry>
        {products[activeTab].map(function (img, index) {
          return (
            <GalleryCard src={img.src} title={img.title} desc={img.desc} />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ProductsGallery;
