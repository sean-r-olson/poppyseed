import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, Router } from 'react-router-dom';
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
                <ul className="hamNavOpen">
                    <li className="hamNavLinks">WORK</li>
                    <li className="hamNavLinks">EVENTS</li>
                    <li className="hamNavLinks">ABOUT</li>
                    <li className="hamNavLinks">CONTACT</li>
                </ul>
                </>
            )
        }
    }}
    
    export default HamNav;