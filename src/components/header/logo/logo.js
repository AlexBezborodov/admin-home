import React from 'react'
import './logo.scss'

import logo from '../../../assets/header/Vector-1.svg'

function Logo() {
    return (
        <div className='logo'>
            <div className='logo-img'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='logo-text'><span>Trasted partners the world over</span></div>
        </div>
    )
}
export default Logo