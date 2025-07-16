import React, { useEffect, useState } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'


const Header = () => {
    const { scrollY, scrollYProgress } = useScroll(10);
    const scale = useTransform(scrollY, [1, 2], [1, 4]);

    console.log(scrollYProgress);


    return (
        <div className='Header'>
            <h1>Reimagina los límites de tu empresa con soluciones avanzadas de IA.</h1>
            <motion.div

                style={{ scale }}

                className="header-main" id="scroll-anim" >

                <AnimatePresence>
                    {scroll && (
                        <motion.h1

                        >Genera</motion.h1>
                    )}
                </AnimatePresence>


            </motion.div>
        </div>
    )
}

export default Header



