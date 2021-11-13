import React from 'react'
import { Container
 } from 'react-bootstrap'
import './footer.scss'
import twitter from '../../assets/footer/twitter.svg'
import linkedin from '../../assets/footer/linkedin.svg'

import footerLogo from '../../assets/footer/footer-logo.svg';
import awards from '../../assets/footer/awards.png'

 function Footer() {
    return (
        <footer >
    	<Container className="footer">
            <div className='footer-wrapper'>
            <div className="col-md-4 footer-logo">
                		<img src={footerLogo} alt="footer trimont Rea logo"/>
                </div>
                <div className="col-md-4 text-right awards">
                		<img class="img-fluid" src={awards} alt="awards" />
                </div>
            </div>
            <div className='divider'></div>
            <div className="row mt-3 pb-5">
            
            	<div className="col-md-9 links">
            	<p className="mb-0 pb-1"><a href="/privacy-policy">Privacy Policy</a> &nbsp;|&nbsp; <a href="/privacy-policy-for-california">Privacy Policy for California</a> &nbsp;|&nbsp; <a href="/privacy-policy-for-australia">Privacy Policy for Australia</a></p>
            	<p className='copyright'>© Copyright 2021 Trimont Real Estate Advisors LLC. All Rights Reserved.</p>
            	</div>
            	<div className="col-md-3 text-right social-media">
            	<p>Follow us</p>
                <a href='http://twitter.com'>
                <img src={twitter} alt='twitter' />    
                </a>
                <a href='http://linkedin.com'>
                <img src={linkedin} alt='linkedin' />
            	</a>
                </div>
            	</div>
            </Container>
        
    </footer>
    )
}
export default Footer;