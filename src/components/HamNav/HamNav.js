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
                <img src="/images/poppyseed-logo1.png" alt="poppyseed-logo" className="logo"/>
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
                <div className="hamNavCloseBtnContainer">
                    <p className="hamNavCloseBtn" onClick={(event) => this.closeNav()}>X</p>
                </div>
                <div>
                <ul className="hamNavOpen">
                    
                    <HashRouter><Link to='/work' style={{ textDecoration: 'none', color: '#464e51'}}><li onClick={(event) => this.closeNav()} className="hamNavLinks">WORK</li></Link></HashRouter>
                    <HashRouter><Link to='/events' style={{ textDecoration: 'none', color: '#464e51' }}><li onClick={(event) => this.closeNav()} className="hamNavLinks">EVENTS</li></Link></HashRouter>
                    <HashRouter><Link to='/about' style={{ textDecoration: 'none', color: '#464e51' }}><li onClick={(event) => this.closeNav()} className="hamNavLinks">ABOUT</li></Link></HashRouter>
                    <HashRouter><Link to='/contact' style={{ textDecoration: 'none', color: '#464e51' }}><li onClick={(event) => this.closeNav()} className="hamNavLinks" >CONTACT</li></Link></HashRouter>
                    
                </ul></div>
                </>
            )
        }
    }}
    
    export default HamNav;