import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home'
import Welcome from '../Screens/Welcome'
import Terms from '../Screens/Terms'
import Policy from '../Screens/Policy'
import About from '../Screens/About'
import Services from '../Screens/Services'
import Contact from '../Screens/Contact'
import Thanks from '../Screens/Thanks'
function RouterApp() {
    return (
        <>
            <Routes>
                <Route path='/' Component={Welcome} />
                <Route path='/home' Component={Home} />
                <Route path='/login' Component={Login} />
                <Route path='/signup' Component={SignUp} />
                <Route path='/terms' Component={Terms} />
                <Route path='/privacy' Component={Policy} />
                <Route path='/about' Component={About} />
                <Route path='/contact' Component={Contact} />
                <Route path='/services' Component={Services} />
                <Route path='/thanks' Component={Thanks} />
            </Routes>
        </>
    )
}

export default RouterApp
