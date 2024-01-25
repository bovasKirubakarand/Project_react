import React from 'react'
import "./Service.css";
import q1 from './dell.png'
import q2 from './ck.jpg'
import q3 from './bio.png'
import q4 from './yamaha.jpg'
import q5 from './shell.png'
import q6 from './Capgemini-Logo-1.webp'
export default function Service() {
    return (
        <div>
            <div className="service">
                <div className="service-item"><img src={q1} className="image"></img></div>
                <div className="service-item"><img src={q2} className="image"></img></div>
                <div className="service-item"><img src={q3} className="image"></img></div>
                <div className="service-item"><img src={q4} className="image"></img></div>
                <div className="service-item"><img src={q5} className="image"></img></div>
                <div className="service-item"><img src={q6} className="image"></img></div>
            </div>
        </div>
    )
}
