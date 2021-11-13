import React from 'react'
import Button from 'react-bootstrap/Button'
import logo from '../../../assets/home/logo-register.svg'

import './register.scss'

 function RegisterBlock() {
    return (
        <div className='register-wrapper'>
            <div className='register-modal'>
                <img src={logo} className='logo-register' alt='logo-register' />
                <h2>Please register for full access</h2>
                <span>Get complete freedom with our API</span>
                <Button>See more</Button>
            </div>
        </div>
    )
}
export default RegisterBlock;