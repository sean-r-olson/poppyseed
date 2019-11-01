import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {

    render() {
        return(
            <>
            <div className="homeTitle1">
                <p className="homeTitleTop">HAND MADE <br/></p>
                <p className="homeTitleBottom"> POTTERY</p>
            </div>
            <Carousel>
            <Carousel.Item>
                <img
                className="homePicture"
                src="/images/poppyseed-homepic1.png"
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="homePicture"
                src="/images/poppyseed-homepic2.png"
                alt="Second slide"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="homePicture"
                src="/images/poppyseed-homepic3.png"
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            </Carousel>
            <div className="homeTitle2">
                <p>MINNEAPOLIS | MN</p>
            </div>
            </>
        )
    }}
    
    export default Home;