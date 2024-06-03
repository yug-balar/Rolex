import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Movetotop from '../../component/movetotop/Movetotop'


function Layout() {

    return (

        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout