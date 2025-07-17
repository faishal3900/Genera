import React, { useEffect, useRef } from 'react'
import Card from './Card'
import "./cardCss.css"

const MoreCard = () => {

    const containerRef = useRef(null);

    // Vertical scroll hone par horizontal scroll ko handle karega
    const handleWheel = (e) => {
        if (containerRef.current
        ) {
            containerRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div className='more-card' ref={containerRef} onWheel={handleWheel}>
            <div className='miniDiv'>
                <Card title="Genera decisiones eficaces" heding="BUSINESS INTELLIGENCE" />
            </div>
            <div className='miniDiv'>
                <Card title="Genera decisiones eficaces" heding="BUSINESS INTELLIGENCE" />
            </div>
            <div className='miniDiv'>
                <Card title="Genera decisiones eficaces" heding="BUSINESS INTELLIGENCE" />
            </div>
            <div className='miniDiv'>
                <Card title="Genera decisiones eficaces" heding="BUSINESS INTELLIGENCE" />
            </div>
            <div className='miniDiv'>
                <Card title="Genera decisiones eficaces" heding="BUSINESS INTELLIGENCE" />
            </div>
        </div>
    )
}

export default MoreCard
