import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';

class Events extends Component {

    render() {
        return(
            <>
            <div className="eventsGrid">
            <div></div>
            <div className="event1">
                <h2 style={{color: '#222', textDecoration: 'none', textIndent: '1.5rem', letterSpacing: '2rem', marginTop: '2rem', marginBottom: '1rem', textShadow: '2px 2px white'}}>EVENTS</h2>  
                <a style={{color: '#222', textDecoration: 'none'}} href="https://www.facebook.com/events/3223068241096741/?notif_t=event_calendar_create&notif_id=1573685375161401">
                <p style={{color: '#222', textDecoration: 'none', letterSpacing: '0.8rem', marginTop: '2rem', marginBottom: '0px'}}>HOLIDAY MARKET</p>
                <p style={{color: '#222', textDecoration: 'none', letterSpacing: '0.1rem', margin: '0px'}}>MERCURY MOSAICS | TATTERSALL</p>
                <p style={{color: '#222', textDecoration: 'none', letterSpacing: '0.5rem', margin: '0px'}}>DEC 14 | 12 - 6 </p>
                </a>
            </div>
            <div></div>
            </div>
            </>
        )
    }}
    
    export default Events;