import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  All,
  Boy,
  Classic,
  Professional
} from "../../../../data/productsPageData";
import GalleryCard from "./GalleryCard";

function ProductsGallery(props) {
  const { activeTab } = props;
  const products = [
    All,
    Classic,
    Boy,
    Professional,
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1 }}>
      <Masonry >
        {products[activeTab].map(function (value, index) {
          return (
            <GalleryCard src={value.src} title={value.title} desc={value.desc} key={index} />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ProductsGallery;
