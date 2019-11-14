import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {

    render() {
        return(
            <>
            <grid-container>
                <div></div>
            <grid-item>
                <p className="homeTitleTop">HAND MADE <br/></p>
                <p className="homeTitleBottom"> POTTERY</p>
            </grid-item>
                <div></div>
            </grid-container>
            <Carousel className="carousel">
            <Carousel.Item>
                <img style={{backgroundImage: 'cover'}}
                className="homePicture"
                src="/images/carouselpicture1.png"
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
                src="/images/carouselpicture2.png"
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
                src="/images/carouselpicture3.png"
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            </Carousel>
            
            <div className="homeGrid2">
                <div></div>
            <div className="homeTitle2">
                <p>MINNEAPOLIS | MN</p>
            </div>
                <div></div>
            </div>
            </>
        )
    }}
    
    export default Home;