import './Card.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';



const Card = (props) => {

    return (
        <div className='card' >
            <video className="background-video" autoPlay loop playsInline >
                <source src="/MyVideo.mp4" type="video/mp4" />
            </video>
            <div className="card-text">
                <p>{props.title}</p>
                <h1>{props.heding}</h1>
                {/* <p>Genera decisiones eficaces</p>
                <h1>BUSINESS INTELLIGENCE</h1> */}
                <ArrowForwardIcon className='card-text-arrow' />
            </div>
        </div>
    )
}

export default Card
