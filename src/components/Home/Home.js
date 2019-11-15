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
                {/* color: '#E9AFA3'  */}
                {/* <Carousel.Caption style={{color: '#8B687F',fontFamily: 'Abril Fatface, cursive', margin: '5% 0%', letterSpacing: '1.5rem', padding: '10px'}}>
                <h3 sytle={{marginBottom: '2rem'}}>HANDMADE</h3>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="homePicture"
                src="/images/carouselpicture2.png"
                alt="Second slide"
                />

                {/* <Carousel.Caption style={{color: '#8B687F', fontFamily: 'Abril Fatface, cursive', margin: '5% 0%', letterSpacing: '1.5rem', padding: '10px'}}>
                <h3 sytle={{marginBottom: '2rem'}}>LOCAL</h3>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="homePicture"
                src="/images/carouselpicture3.png"
                alt="Third slide"
                />
            {/* <Carousel.Caption style={{color: '#8B687F',fontFamily: 'Abril Fatface, cursive', margin: '5% 0%', letterSpacing: '1.5rem', padding: '10px'}}>
                <h3 sytle={{marginBottom: '2rem'}}>MINNEAPOLIS | MN</h3>
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