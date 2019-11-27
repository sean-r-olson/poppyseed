import React, { Component } from 'react';

// import stylesheet
import '../App/App.css';

class Events extends Component {

    render() {
        return(
            <>
            <h2 style={{textAlign: 'center', color: '#222', textDecoration: 'none', letterSpacing: '1rem', marginTop: '60px', marginBottom: '1rem', textShadow: '2px 2px white'}}>EVENTS</h2>  
            <div className="eventsGrid">
                <div>{/*empty div*/}</div>
                <div className="event1">
                    <a style={{color: 'white',textDecoration: 'none'}} href="https://www.facebook.com/events/3223068241096741/?notif_t=event_calendar_create&notif_id=1573685375161401">
                    <p style={{textDecoration: 'none', letterSpacing: '0.8rem', marginBottom: '0px'}}>HOLIDAY MARKET</p>
                    <p style={{textDecoration: 'none', letterSpacing: '0.1rem', margin: '0px'}}>MERCURY MOSAICS | TATTERSALL</p>
                    <p style={{textDecoration: 'none', letterSpacing: '0.5rem', margin: '0px'}}>DEC 14 | 12 - 6 </p>
                    </a>
                </div>
                <div>{/*empty div*/}</div>
            </div>
            </>
        )
    }}
    
    export default Events;