import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { watches } from '../../../data/productpadedata'
import WatchesCard from './WatchesCard'
import Twocard from './Twocard/Twocard';
import Threecard from './Threecard/Threecard';

function WatchesGallery(props) {
    const { activeTab } = props;

    const Products = [
        watches
    ]
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 350: 2, 750: 2, 900: 3 }}>
            <Masonry gutter="10px">
                {Products[activeTab].map(function (value) {
                    if (value.type === "one") {
                        return (
                            <WatchesCard src={value.src} title={value.title} desc={value.desc} />
                        );
                    } else if (value.type === "two") {
                        return (
                            <Twocard src={value.src} title={value.title} desc={value.desc} />
                        );
                    } else {
                        return <Threecard src={value.src} title={value.title} desc={value.desc} />
                    }
                })}
            </Masonry>
        </ResponsiveMasonry>)
}

export default WatchesGallery