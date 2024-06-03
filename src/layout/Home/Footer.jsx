import React from 'react'
import style from '../../styles/Home/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faQq, faWeibo, faWeixin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

function Footer() {
  return (
    <>

      <div className={style.backContainer}>


        <div className={style.MainContainer}>
          <div className={style.shareContainer}>
            <div className={style.share}>
              <h3>Share</h3>
            </div>
            <div className={style.shareicon}>
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faPinterestP} />
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faWeibo} />
              <FontAwesomeIcon icon={faQq} />
            </div>

          </div>
        </div>
        <div className={style.footermain}>
          <div className={style.logo}>
            <img src='/images/logo.png' alt='logo' />
            <h2>ROLEX</h2>
          </div>
          <div className={style.main}>

            <div className={style.Footer2}>
              <div className={style.rolexwatch}>
                <div className={style.div1}>
                  <h1>Rolex Watches</h1>
                </div>
                <div>

                  <h3>New Watches 2024</h3>
                  <h3>Find Your Rolex</h3>
                  <h3>Configure Your Rolex</h3>
                  <h3>Men's Watches</h3>
                  <h3>Women's Watches</h3>
                  <h3>Gold Watches</h3>
                </div>
              </div>
              <div className={style.rolexwatch}>
                <div className={style.div1} >

                  <h1>The Collection</h1>
                </div>
                <div>

                  <h3>Air-King</h3>
                  <h3>Cosmograph Daytona</h3>
                  <h3>Datejust</h3>
                  <h3>Lady-Datejust</h3>
                  <h3>Day-Date</h3>
                  <h3>Explorer</h3>
                  <h3>GMT-Master ||</h3>
                  <h3>Oyester Perpetual</h3>
                  <h3>Sea-Dweller</h3>
                  <h3>Deepsea</h3>
                  <h3>Sky-Dweller</h3>
                  <h3>Submariner</h3>
                  <h3>Yatcht-Master</h3>
                  <h3>1908</h3>
                </div>
              </div>
              <div className={style.rolexwatch}>
                <div className={style.div1}>

                  <h1>Watchmaking</h1>
                </div>
                <div>

                  <h3>At the core of excellence</h3>
                  <h3>Behind the seal</h3>
                  <h3>Rolex anatomy</h3>

                </div>
              </div>
            </div>

            <div className={style.footer3}>
              <div className={style.Footer2}>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Rolex and sports</h1>
                  </div>
                  <div>

                    <h3>Tennis</h3>
                    <h3>Golf</h3>
                    <h3>Yatching</h3>
                    <h3>Motor sport</h3>
                    <h3>Equestrianism</h3>

                  </div>
                </div>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Perpetual intiatives</h1>
                  </div>
                  <div>

                    <h3>Perpetual Planet initiatives</h3>
                    <h3>Perpetual art initiatives</h3>
                  </div>
                </div>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>About Rolex</h1>
                  </div>
                  <div>

                    <h3>Sustainable Development</h3>
                    <h3>Behind the crown</h3>
                    <h3>History</h3>
                  </div>
                </div>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Buying a Rolex</h1>
                  </div>
                  <div>
                    <h3>Store a Rolex</h3>
                    <h3>Buying a Rolex</h3>
                    <h3>Rolex Certified Pre-Owened</h3>
                  </div>
                </div>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Care and servicing</h1>
                  </div>
                  <div>
                    <h3>Services Center locator</h3>
                    <h3>Watch care and services</h3>
                  </div>
                </div>
              </div>
              <div className={style.Footer2}>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Services</h1>
                  </div>
                  <div>
                    <h3>Frequently asked question</h3>
                    <h3>Your favorites</h3>
                    <h3>File Support</h3>
                    <h3>New room <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
                  </div>
                </div>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Legal notice</h1>
                  </div>
                  <div>
                    <h3>Terms of use</h3>
                    <h3>Privacy notice</h3>
                    <h3>Cookies</h3>
                  </div>
                </div>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Accessbility</h1>
                  </div>
                  <div>
                    <h3>Read our statement</h3>
                  </div>
                </div>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Media</h1>
                  </div>
                  <div>
                    <h3>Wallpaper</h3>
                    <h3>Brouchurer</h3>
                    <h3>User guides</h3>
                  </div>
                </div>
                <div className={style.rolexwatch}>
                  <div className={style.div1}>
                    <h1>Official channels</h1>
                  </div>
                  <div>
                    <h3><FontAwesomeIcon icon={faFacebookF} /> Facebook</h3>
                    <h3><FontAwesomeIcon icon={faInstagram} /> Instagram</h3>
                    <h3><FontAwesomeIcon icon={faXTwitter} /> X</h3>
                    <h3><FontAwesomeIcon icon={faYoutube} /> Youtube</h3>
                    <h3><FontAwesomeIcon icon={faYoutube} /> Printerest</h3>
                    <h3><FontAwesomeIcon icon={faLinkedinIn} /> Linkdin</h3>
                    <h3><FontAwesomeIcon icon={faCirclePlay} /> Youku</h3>
                    <h3><FontAwesomeIcon icon={faWeibo} /> Weibo</h3>
                    <h3><FontAwesomeIcon icon={faWeixin} /> Wechat</h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.backContainer}>
          <img src="/images/back.jpg" alt="" />
        </div>
      </div>

    </>
  )
}

export default Footer