import React, { useState } from 'react'
import Styles from '../../styles/Home/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEarth, faHeart, faLocationDot, faSearch, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Carousel from '../../component/carousel/Carousel';


function Header() {

    const tabs = [
        { text: "Rolex Watches", link: "Watchpage" },
        { text: "New Watches 2024", link: "newwatchpage" },
        { text: "Watchmaking", link: "rolexmakingpage" },
    ];
    const tabs2 = [
        { text: "About Rolex", link: "aboutrolex" }
    ]
    const tabs3 = [
        { text: "Rolex and Sports", link: "sportpage" },
        { text: "Perpetual initiatives", link: "perpetual" }
    ]
    const tabs4 = [
        { text: "Buying a Rolex", link: "buyingpage" },
        { text: "Care and servicing", link: "services" }
    ]
    const tabs5 = [
        { text: "Find Your Rolex ", link: "watchespage" },
        { text: "Configure your Watch", link: "configur" },
        { text: "Contact us", link: "contactpage" },
    ]

    const [isVisible, setIsVisible] = useState(false);

    function toggleMenu() {
        setIsVisible(!isVisible);
    }

    return (
        <>

            {isVisible ? (
                <div className={Styles.visible} >

                    <div className={Styles.visiblemenu}>
                        <div className={Styles.closecon} onClick={toggleMenu}>
                            <div >

                                {isVisible ? (
                                    <FontAwesomeIcon icon={faClose} />
                                ) : (
                                    <FontAwesomeIcon icon={faBars} />
                                )}
                            </div>
                            <div>
                                <h3>Close</h3>
                            </div>
                        </div>
                        <div className={Styles.visiblelogo}>


                            <Link to="/">

                                <img src="/images/logo3.svg" alt='logo' onClick={toggleMenu} />
                            </Link>
                        </div>
                        <div className={Styles.language}>
                            <FontAwesomeIcon icon={faEarth} />
                            <h4>English</h4>
                        </div>
                    </div>
                    <div className={Styles.watchContainer}>
                        <div className={Styles.Watchmaking}>
                            <div className={Styles.container}>

                                <div className={Styles.text}>
                                    {
                                        tabs.map((value, index) =>
                                            <h1 key={index}>

                                                <Link to={value.link} onClick={toggleMenu}>{value.text}</Link>
                                            </h1>
                                        )
                                    }
                                </div>
                                <div className={Styles.text}>

                                    {
                                        tabs2.map((value, index) =>
                                            <h1 key={index}>

                                                <Link to={value.link} onClick={toggleMenu}>{value.text}</Link>
                                            </h1>
                                        )
                                    }
                                </div>
                                <div className={Styles.text}>
                                    {
                                        tabs3.map((value, index) =>
                                            <h1 key={index}>

                                                <Link to={value.link} onClick={toggleMenu}>{value.text}</Link>
                                            </h1>
                                        )
                                    }
                                </div>
                                <div className={Styles.text}>
                                    {
                                        tabs4.map((value, index) =>
                                            <h1 key={index}>

                                                <Link to={value.link} onClick={toggleMenu}>{value.text}</Link>
                                            </h1>
                                        )
                                    }
                                </div>
                                <div className={Styles.findtext}>
                                    {
                                        tabs5.map((value, index) =>
                                            <h1 key={index}>

                                                <Link to={value.link} onClick={toggleMenu}>{value.text}</Link>
                                            </h1>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                        <div className={Styles.Watches}>
                            <Carousel />
                        </div>
                    </div>

                </div>
            ) : (
                <div className={`${Styles.Navbar}${isVisible ? Styles.visible : ""}`} >
                    <div className={Styles.mainContainer}>
                        <div className={Styles.menu} onClick={toggleMenu}>
                            <div>

                                {isVisible ? (
                                    <FontAwesomeIcon icon={faClose} />
                                ) : (
                                    <FontAwesomeIcon icon={faBars} />
                                )}
                            </div>
                            <div>
                                <h3>Menu</h3>
                            </div>
                        </div>
                        <div className={Styles.logo}>
                            <Link to="/">

                                <img src="/images/logo3.svg" alt='logo' />
                            </Link>
                        </div>
                        <div className={Styles.IconContainer}>


                            <div>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>

                        </div>
                    </div>
                </div>)}

        </>
    );
}

export default Header