import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';

// import stylesheet
import '../App/App.css';

// HamNav to be rendered in MOBILE view only
class HamNav extends Component {
    
    // open set to false (hamnav is closed) by default
    state = {
        open: false
    }

    // open hamnav menu (set open in state to true)
    openNav = () => {
        this.setState({
            open: true
        })
    }

    // close hamnav menu (set open in state to false)
    closeNav = () => {
        this.setState({
            open: false
        })
    }

    render() {
        // default (hamnav is closed)
        if (this.state.open === false) {
        return(
            <div className="hamNavContainer">
                <div className="hamNavGridItem1">
                    <p style={{fontSize: '13px', fontWeight: '300', float: 'right', opacity: '0.5'}} className="desktopDescription">MPLS</p>
                </div>
                <div>
                    <HashRouter><Link to='/home'><img src="/images/poppyseed-logo1.png" alt="poppyseed-logo" className="logo"/></Link></HashRouter>
                </div>
                <div className="hamNavGridItem2">
                    <p style={{fontSize: '13px', fontWeight: '300', float: 'left', paddingLeft: '20px', letterSpacing: '1.5rem', opacity: '0.5'}} className="desktopDescription2">MN</p>
                </div>
                <div className="hamNav" onClick={(event) => this.openNav()}>
                    <div className="hamNavIcon">
                    </div>
                    <div className="hamNavIcon">
                    </div>
                    <div className="hamNavIcon">
                    </div>
                </div>  
            </div>
        // when hamnav is clicked, return hamnav menu (overlaying page content/header)
        )} else if (this.state.open === true) {
            return(
                <>
                <div className="hamNavContainer">
                    <div>{/* empty div */}</div>
                    <HashRouter><Link to='/home'><img src="/images/poppyseed-logo1.png" alt="poppyseed-logo" className="logo"/></Link></HashRouter>
                    <div>{/* empty div */}</div>
                    <div className="hamNav" onClick={(event) => this.openNav()}>
                        <div className="hamNavIcon">
                        </div>
                        <div className="hamNavIcon">
                        </div>
                        <div className="hamNavIcon">
                        </div>
                    </div>  
                </div>
            {/* *********** OPEN HAMNAV ************** */}
                <div className="hamNavOpenContainer">
                    <div className="hamNavCloseBtnContainer">
                        <p className="hamNavCloseBtn" onClick={(event) => this.closeNav()}>X</p>
                    </div>
                {/* *** LINKS TO PAGES *** */}
                    <div>
                        <HashRouter><Link to='/work' style={{ textDecoration: 'none', color: '#222'}}><p style={{opacity: '1'}} onClick={(event) => this.closeNav()} className="hamNavLinks">WORK</p></Link></HashRouter>
                        <HashRouter><Link to='/events' style={{ textDecoration: 'none', color: '#222' }}><p style={{opacity: '1'}} onClick={(event) => this.closeNav()} className="hamNavLinks">EVENTS</p></Link></HashRouter>
                        <HashRouter><Link to='/about' style={{ textDecoration: 'none', color: '#222' }}><p style={{opacity: '1'}} onClick={(event) => this.closeNav()} className="hamNavLinks">ABOUT</p></Link></HashRouter>
                        <HashRouter><Link to='/contact' style={{ textDecoration: 'none', color: '#222' }}><p style={{opacity: '1'}} onClick={(event) => this.closeNav()} className="hamNavLinks" >CONTACT</p></Link></HashRouter>
                    </div>
                </div>
                </>
            )
        }
    }}
    
    export default HamNav;