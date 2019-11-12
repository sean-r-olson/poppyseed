import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, Router, HashRouter } from 'react-router-dom';
import '../App/App.css';

class HamNav extends Component {
    
    state = {
        open: false
    }

    openNav = () => {
        this.setState({
            open: true
        })
    }

    closeNav = () => {
        this.setState({
            open: false
        })
    }

    render() {
        console.log(this.state)
        if (this.state.open === false) {
        return(
            <div className="hamNavContainer">
                <div></div>
                <HashRouter><Link to='/home'><img src="/images/poppyseed-logo1.png" alt="poppyseed-logo" className="logo"/></Link></HashRouter>
                <div></div>
                <div className="hamNav" onClick={(event) => this.openNav()}>
                    <div className="hamNavIcon">
                    </div>
                    <div className="hamNavIcon">
                    </div>
                    <div className="hamNavIcon">
                    </div>
                </div>  
            </div>
        )} else if (this.state.open === true) {
            return(
                <>
                <div className="hamNavContainer">
                <div></div>
                <HashRouter><Link to='/home'><img src="/images/poppyseed-logo1.png" alt="poppyseed-logo" className="logo"/></Link></HashRouter>
                <div></div>
                <div className="hamNav" onClick={(event) => this.openNav()}>
                    <div className="hamNavIcon">
                    </div>
                    <div className="hamNavIcon">
                    </div>
                    <div className="hamNavIcon">
                    </div>
                </div>  
            </div>
                <div className="hamNavOpenContainer">
                <div className="hamNavCloseBtnContainer">
                    <p className="hamNavCloseBtn" onClick={(event) => this.closeNav()}>X</p>
                </div>
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