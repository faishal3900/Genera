import React from 'react'
import './aboutCss.css'
import { assets } from '../../assets/assets'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {

    const { scrollYProgress } = useScroll();
    const background = useTransform(scrollYProgress, [0, 1], ["#000", "#dadada"]);
    return (
        <motion.div
            style={{ background }}
            className='about'>
            <div className="about-hearding">
                <h1>Popósito</h1>
            </div>
            <div className="about-main">
                <div className="about-anim">
                    <img src={assets.Anim} alt="" />
                </div>
                <div className="about-anim-p">
                    <p>Genera nace para democratizar la revolución de la Inteligencia Artificial en el ámbito empresarial con soluciones prácticas, innovadoras y a medida.</p>
                    <p>La razón de nuestra existencia es implementar la IA hoy haciéndola asequible a todo tipo de empresas para contribuir a su éxito, competitividad y sostenibilidad en el mañana digital.</p>
                </div>
            </div>
        </motion.div>
    )
}

export default About
