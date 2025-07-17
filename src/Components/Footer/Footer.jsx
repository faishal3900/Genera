import React from 'react'
import './footerCss.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-header">
                <h1>Genera AI</h1>
            </div>
            <div className="footer-main-div">
                <div className="footer-main-dirección div-1">
                    <h1>Dirección</h1>
                    <p>Torre d’Ara Av. Cabrera 36, Planta Baixa
                        08302 Mataró, Barcelona</p>
                </div>
                <div className="footer-main-dirección div-2">
                    <h1>Email</h1>
                    <p>info@generaconsulting.ai</p>
                    <p>+34 623 46 39 87</p>
                </div>
                <div className="footer-main-dirección div-3">
                    <h1>Redes Sociales</h1>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer-main-dirección div-4">
                    <h1>Newsletter</h1>
                    <input className='input-1' type="text" placeholder='Enter Your Email Address' />
                    <hr />

                    <p><input className='check-box' type="checkbox" />I agree to the Privacy Policy.</p>
                </div>
            </div>
            <div className="footer-last">
                <hr />
                <p>
                    Genera Consulting © 2025. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer
