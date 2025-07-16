import React from 'react'
import './DepartamentCard.css'
import { assets } from '../../assets/assets'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DepartamentCard = () => {
    return (
        <div className='departament-card' >
            <div className='departament-card-main-1'>
                <div className="departament-card-main">
                    <div className="departament-card-left-side">
                        <p>Proyectamos tu negocio</p>
                        <h1>Departament</h1>
                        <h1>o</h1>
                        <h1>Directivo &</h1>
                        <h1>Project</h1>
                        <h1>Management</h1>
                        <ArrowForwardIcon className='card-text-arrow' />
                    </div>
                    <div className="departament-card-right-side">
                        <img src={assets.lotti} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DepartamentCard
