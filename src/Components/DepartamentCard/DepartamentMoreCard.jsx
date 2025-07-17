import React from 'react'
import DepartamentCard from './DepartamentCard'
import './departamentCardCss.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { assets } from '../../assets/assets'

const DepartamentMoreCard = () => {
    return (
        <div className='departament-more-Card'>

            <div className='departament-more-Card-1'        >
                <div className='departament-card' >
                    <div className='departament-card-main-2'>
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
            </div>
            <div className='departament-more-Card-2'>
                <DepartamentCard />
            </div>
            <div className='departament-more-Card-3'>
                <DepartamentCard />
            </div>
            <div className='departament-more-Card-4'>
                <DepartamentCard />
            </div>
            <div className='departament-more-Card-5'>
                <DepartamentCard />
            </div>
            <div className='departament-more-Card-6'>
                <DepartamentCard />
            </div>



        </div>
    )
}

export default DepartamentMoreCard
