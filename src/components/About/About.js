import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';

class About extends Component {

render() {
    return(
        <>
        <div className="aboutGrid">
            <div className ="aboutDescription">
                <p>Poppyseed Pottery is Lara Eve. </p>
            </div>
            <div className="aboutGridItem">
                <img src="/images/poppyseed-aboutpic2.png" alt="aboutPic1" className="aboutPic1"/>
            </div>
            <div className="aboutGridItem">
                <p> A lifelong lure to design and crafts led Lara to the wonderful 
                    Minneapolis Parks and Rec pottery program, where she fell in the love with the art. Pottery is Lara's 
                    escape and way of exercising expression.
                    <br/>
                    <br/>
                    Lara grew up in Austin, TX. She, her husband, Sean, and their two beautiful cats - Jack and Louis, now call Minneapolis home. 
                    Find Lara and her work at Minneapolis Craft Market's next event, or on etsy, instagram, and facebook.  
                </p>
            </div>
        </div>
        </>
    )
}}

export default About;