import React, { Component } from 'react';

// import stylesheet 
import '../App/App.css';

// import carousel (bootstrap)
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {

    render() {
        return(
            <>
            <grid-container>
                <div>{/* empty div */}</div>
                <grid-item>
                    <p className="homeTitleTop">HAND MADE <br/></p>
                    <p className="homeTitleBottom"> POTTERY</p>
                </grid-item>
                <div>{/* empty div */}</div>
            </grid-container>
            <Carousel className="carousel">
                {/* CAROUSEL ITEM 1 */}
                    <Carousel.Item className="carouselItem1">
                        <img style={{backgroundImage: 'cover'}}
                        className="homePicture"
                        src="/images/carousel-image3.png"
                        alt="First slide"
                        />
                    </Carousel.Item>
                {/* CAROUSEL ITEM 2 */}
                    <Carousel.Item>
                        <img style={{backgroundImage: 'cover'}}
                        className="homePicture"
                        src="/images/carousel-image1.png"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                {/* CAROUSEL ITEM 3 */}
                    <Carousel.Item>
                        <img style={{backgroundImage: 'cover'}}
                        className="homePicture"
                        src="/images/carousel-image2.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>
            </Carousel>
            <div className="homeGrid2">
                    <div>{/* empty div */}</div>
                <div className="homeTitle2">
                    <p>MINNEAPOLIS | MN</p>
                </div>
                    <div>{/* empty div */}</div>
            </div>
            </>
        )
    }}
    
    export default Home;