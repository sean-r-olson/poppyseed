import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';

class Contact extends Component {

    render() {
        return(
            <>
            <div className="contactGrid">
            <div></div>
            <div>
                {/* <h2 style={{fontSize: '1rem', color: '#222', textIndent: '1.5rem', letterSpacing: '2rem', marginTop: '2rem', marginBottom: '1rem', textShadow: '2px 2px white'}}>CONTACT</h2> */}
                <p className="email"> LARA EVE <br/>
                 email: poppyseedpottery@gmail.com</p>
                <div className="socialMediaContainer">
                    <a href="https://www.instagram.com/poppyseed_pottery/"><img src="/images/instagramlogo.png" alt="instagram" className="instagramLogo"/></a>
                    <a href="https://www.facebook.com/poppyseedpotteryco/"><img src="/images/facebooklogo.png" alt="facebook" className="facebookLogo"/></a>
                    <a href="https://www.etsy.com/shop/PoppyseedPotteryShop"><img src="/images/etsylogo.png" alt="etsy" className="etsyLogo"/></a>
                </div>
            </div>
            <div></div>
            </div>
            </>
        )
    }}
    
    export default Contact;