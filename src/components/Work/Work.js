import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';

class Work extends Component {

    render() {
        return(
            <>
            <div className="workImagesContainer">
                {/* ITEM 1 */}
                <div className="emptyDiv"></div>
                <a style={{textDecoration: 'none'}} href="https://www.etsy.com/listing/737930224/blue-pink-bud-vases?ref=shop_home_active_1">
                <div>
                <img className="workImages" src="/images/item1.png"/>
                <p className="workDescriptions">BLUE & PINK BUD VASES <br/> $25 </p>
                </div>
                </a>
                <div className="emptyDiv"></div>
                {/* ITEM 2 */}
                <div className="emptyDiv"></div>
                <a style={{textDecoration: 'none'}} href="https://www.etsy.com/listing/742310207/yellow-splatter-miso-soup-bowls?ref=shop_home_active_4">
                <div>
                <img className="workImages" src="/images/item2.png"/>
                <p className="workDescriptions">YELLOW SPLATTER MISO SOUP BOWLS <br/> $15 </p>
                </div>
                </a>
                <div className="emptyDiv"></div>
                {/* ITEM 3 */}
                <div className="emptyDiv"></div>
                <a style={{textDecoration: 'none'}} href="https://www.etsy.com/listing/742308713/black-beige-speckled-mug?ref=shop_home_active_2">
                <div>
                <img className="workImages" src="/images/item4.png"/>
                <p className="workDescriptions">BLACK & BEIGE SPECKLED MUG <br/> $25 </p>
                </div>
                </a>
                <div className="emptyDiv"></div>
                {/* ITEM 4 */}
                <div className="emptyDiv"></div>
                <a style={{textDecoration: 'none'}} href="https://www.etsy.com/listing/728448796/splatter-snack-bowl?ref=shop_home_active_3">
                <div>
                <img className="workImages" src="/images/item3.png"/>
                <p className="workDescriptions">SPLATTER SNACK BOWL <br/> $20 </p>
                </div>
                </a>
                <div className="emptyDiv"></div>
                {/* ITEM 5 */}
                <div className="emptyDiv"></div>
                <a style={{textDecoration: 'none'}} href="https://www.etsy.com/listing/728449344/lilac-miso-soup-bowls?ref=shop_home_active_5">
                <div>
                <img className="workImages" src="/images/item5.png"/>
                <p className="workDescriptions">LILAC MISO SOUP BOWLS <br/> $15 </p>
                </div>
                </a>
                <div className="emptyDiv"></div>
                </div>
            </>
        )
    }}
    
    export default Work;