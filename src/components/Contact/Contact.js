import React, { Component } from 'react';
import {connect} from 'react-redux';

// import stylesheet
import '../App/App.css';

class Contact extends Component {

    render() {
        return(
            <>
            <div className="contactGrid">
                <div>{/* empty div */}</div>
                <div>
                    <p className="email"> LARA EVE <br/>
                    email: poppyseedpottery@gmail.com
                    </p>
                    <div className="socialMediaContainer">
                        <a href="https://www.instagram.com/poppyseed_pottery/"><img src="/images/instagramlogo.png" alt="instagram" className="instagramLogo"/></a>
                        <a href="https://www.facebook.com/poppyseedpotteryco/"><img src="/images/facebooklogo.png" alt="facebook" className="facebookLogo"/></a>
                        <a href="https://www.etsy.com/shop/PoppyseedPotteryShop"><img src="/images/etsylogo.png" alt="etsy" className="etsyLogo"/></a>
                    </div>
                </div>
                <div>{/* empty div */}</div>
            </div>
            </>
        )
    }}
    
    export default Contact;