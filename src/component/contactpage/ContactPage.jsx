import React, { useState } from 'react'
import emailjs from "@emailjs/browser";

import styles from "./contact.module.css"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopOver from '../Common/PopOver';

function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isError, setIsError] = useState(0);

    function hidePopOver() {
        setIsVisible(false);
        setIsError(0);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;

        setIsLoading(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_EJS_SERVICE_ID,
                process.env.REACT_APP_EJS_TEMPLATE_ID,
                form,
                {
                    publicKey: process.env.REACT_APP_EJS_PUBLIC_KEY,
                }
            )
            .then(() => {
                form.reset();
                setIsError(-1);
            })
            .catch((error) => {
                setIsError(1);
            })
            .finally(() => {
                setIsLoading(false);
                setIsVisible(true);
            });
    }
    return (
        <>
            <div className={styles.MainContainer}>
                <div className={styles.ExtraContainer}>

                    <div className={styles.MapContainer}>

                        <iframe
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=surat%20surat+(near%20me%20rolex%20shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

                        </iframe>
                    </div>
                    <div className={styles.contact}>
                        <form onSubmit={handleSubmit}>

                            <div className={styles.ContactExtraContainer}>

                                <div className={styles.textContainer}>

                                    <h3>Rolex</h3>
                                    <p>Enquire about props, antiques and anything else.</p>
                                </div>
                                <div className={styles.Container}>

                                    <div className={styles.InputContainer}>
                                        <input type="text" placeholder='Name' id='name' name='user_name' />
                                        <input type="email" placeholder='Email' id="email"
                                            name="user_email"
                                            className="form-control" />
                                    </div>
                                    <div className={styles.TextContainer}>

                                        <textarea placeholder="How Can We Help? " name='user_message'></textarea>
                                    </div>
                                    <div className={styles.btn}>

                                        <button type="submit" className={styles.submitBtn}>
                                            {isLoading ? "Sending..." : "Send"}
                                            {isLoading && (
                                                <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>

                    <PopOver
                        message={
                            isError === 1
                                ? "Failed to submit form!"
                                : "Form submitted successfully!"
                        }
                        status={isError === 1 ? "error" : "success"}
                        isVisible={isVisible}
                        hidePopOver={hidePopOver}
                    />
                </div>

            </div >
        </>)
}

export default ContactPage