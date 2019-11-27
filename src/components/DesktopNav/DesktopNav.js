import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';

// import stylesheet
import '../App/App.css';

class DesktopNav extends Component {
    
 
    render() {
        return(
            <>
            <div className="desktopNavContainer">
                {/* *** LINKS TO PAGES *** */}
                <div className="desktopNavWork">
                    <HashRouter><Link  style={{textDecoration: 'none', color: 'white'}} to="/work"><p>WORK</p></Link></HashRouter>
                </div>
                <div className="desktopNavEvents">
                    <HashRouter><Link  style={{textDecoration: 'none', color: 'white'}} to="/events"><p>EVENTS</p></Link></HashRouter>
                </div>
                <div className="desktopNavAbout">
                    <HashRouter><Link  style={{textDecoration: 'none', color: 'white'}} to="/about"><p>ABOUT</p></Link></HashRouter>
                </div>
                <div className="desktopNavContact">
                    <HashRouter><Link  style={{textDecoration: 'none', color: 'white'}} to="/contact"><p>CONTACT</p></Link></HashRouter>
                </div>
            </div>
            </>
            )
        }
    }
    
    export default DesktopNav;