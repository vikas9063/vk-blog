import React from 'react'
import './style.scss'

const ServiceCard = (props) => {
    const { serviceTitle, serviceDesc, imageData } = props.card;
    return (
        <div className="card">
            <div className="card-image">
                <img src={imageData} alt='banner'/>
                <div className="gradient-overlay"></div>
            </div>
            <div className="card-header">
                <p className='title'>{serviceTitle}</p>
            </div>
            
            <div className="card-body">
                <p>{serviceDesc}</p>
            </div>
           
        </div>
    )
}

export default ServiceCard