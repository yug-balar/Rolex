import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watchpage from "./component/bracelet/new-watchpage/Watchpage";
import Layout from "./layout/Home/Layout";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import AboutRolex from "./component/Aboutpage/AboutRolex";
import Slider from "./component/Slider/Slider";
import Buyingpage from "./component/buyingpage/Buyingpage";
import ContactPage from "./component/contactpage/ContactPage";
import Rolexmaking from "./component/find-rolex/rolexmaking/Rolexmaking";
import Findwatchpage from "./component/findwatchpage/Findwatchpage";
import Movetotop from "./component/movetotop/Movetotop";
import NewWatchPage from "./component/new-watch/newwatch/NewWatchPage";
import Perpetualpage from "./component/perpetual/Perpetualpage";
import Services from "./component/services/Services";
import Sportpage from "./component/sports/sportpage/Sportpage";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Movetotop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="watchpage" element={<Watchpage />} />
            <Route path="newwatchpage" element={<NewWatchPage />} />

            <Route path="sportpage" element={<Sportpage />} />
            <Route path="rolexmakingpage" element={<Rolexmaking />} />
            <Route path="aboutrolex" element={<AboutRolex />} />
            <Route path="perpetual" element={<Perpetualpage />} />
            <Route path="buyingpage" element={<Buyingpage />} />
            <Route path="services" element={<Services />} />
            <Route path="configur" element={<Slider />} />
            <Route path="watchespage" element={<Findwatchpage />} />
            <Route path="contactpage" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
