import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';

class Work extends Component {

    render() {
        return(
            <>
            <div className="workImagesContainer">
                <div>
                </div>

                <div>
                <img className="workImages" src="/images/poppyseed-item1.png"/>
                <p className="workDescriptions">SPLATTER PLANTER <br/> $20 </p>
                </div>

                <div>
                </div>
                <div>
                </div>
                <div>
                <img className="workImages" src="/images/poppyseed-item2.png"/>
                <p className="workDescriptions">POLKA DOT BUD VASE <br/> $15 </p>
                </div>
            </div>
            </>
        )
    }}
    
    export default Work;