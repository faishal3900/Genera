
import React from 'react'
import "./partnerPostCss.css"

const WeAreGenera = () => {
    return (
        <div className='WeAreGenera'>
            <video className="background-video1" autoPlay loop preload playsInline >
                <source src="/MyVideo1.mp4" type="video/mp4" />
            </video>
            <div className="WeAreGenera-right-side">
                <hr />
            </div>
            <div className="WeAreGenera-left-side">
                <div className="WeAreGenera-heading">
                    <h1>
                        Partner
                        estratégico
                    </h1>
                </div>
                <div className="WeAreGenera-perag">
                    <p>
                        Nuestro equipo profesional altamente capacitado y nuestros recursos exclusivos de tecnología propia, te ayudarán en todas las etapas del proceso de implementación de soluciones para el impulso sin límites que la IA te puede ofrecer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WeAreGenera
