import React from 'react'


const Services = ({ image }) => {
    return (
        <div className="Services">
            <img src={image} alt="serviceImage" />
            <h5 className="service-title"></h5>
            <p className="service-text">This is title</p>
        </div>
    )
}

export default Services
