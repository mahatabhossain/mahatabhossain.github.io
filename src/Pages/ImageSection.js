import React from 'react'
import Image from '../Images/about_image.jpg'

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="about-images">
                <img className="image" src={Image} alt="about_image" />
            </div>
            <div className="about-info">
                <h4>I am <span>Mahatab Hossain</span></h4>
                <p className="about-text">Write here about Yourself and Your educational qualification and
                anything you want.Write here about Yourself and Your educational qualification and
                anything you want.
                </p>
                <div className="about-details">
                    <div className="name-details">
                        <p>Full name: Mahatab Hossain</p>
                        <p></p>
                    </div>

                    <div className="name-details">
                        <p>Age: 24</p>
                        <p></p>
                    </div>

                    <div className="name-details">
                        <p>Nationality: Indian</p>
                        <p></p>
                    </div>

                    <div className="name-details">
                        <p>Language: English, Hindi, Bengali</p>
                        <p></p>
                    </div>

                    <div className="name-details">
                        <p>Address: Murshidabad, 742123, West Bengal</p>
                        <p></p>
                    </div>
                </div>

                <button className="btn">Download Resume </button>
            </div>


        </div>
    )
}

export default ImageSection
