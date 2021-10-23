import React from 'react'
import Navigator from './navigator/navigator'
import './navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='navbar__logo'>IEGE</h1>
            <Navigator/>
        </div>
    )
}