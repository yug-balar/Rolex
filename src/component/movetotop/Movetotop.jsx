import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Movetotop() {
    const [scroll, setScroll] = useState(window.scrollY);

    function moveToTop() {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);

        // Clean-up function
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);
    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", position: "fixed",
            right: "0%",
            bottom: "5%",
            padding: "16px",
            height: "50px",
            width: "200px"
        }}>
            {scroll > 500 && (
                <button
                    style={{ height: "50px", width: "50px", borderRadius: "50%", border: "2px solid white ", zIndex: "999", position: "fixed" }}
                    onClick={moveToTop}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </div>)
}

export default Movetotop