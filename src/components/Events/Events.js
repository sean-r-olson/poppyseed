import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';

class Events extends Component {

    render() {
        return(
            <>
            <div className="eventsGrid">
            <div></div>
            <div>
                <h2 style={{textIndent: '1.5rem', letterSpacing: '2rem', marginTop: '2rem', marginBottom: '1rem', textShadow: '2px 2px white'}}>EVENTS</h2>
                <p style={{letterSpacing: '0.8rem', marginTop: '2rem', marginBottom: '0px'}}>HOLIDAY MARKET</p>
                <p style={{letterSpacing: '0.1rem', margin: '0px'}}>MERCURY MOSAICS | TATTERSALL</p>
                <p style={{letterSpacing: '0.5rem', margin: '0px'}}>DEC 14 | 12 - 6 </p>
            </div>
            <div></div>
            </div>
            </>
        )
    }}
    
    export default Events;