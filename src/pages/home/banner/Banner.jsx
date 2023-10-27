import React from 'react'
import './style.scss'
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="left-banner">
                <div className="banner-heading">
                    <p className='banner-title'>
                        Ask Anything and get resolve
                    </p>
                </div>
                <div className="banner-desc">
                    <p>
                    Feel free to raise any queries or concerns you might have about technology, and we will be more than happy to assist you. Additionally, don't hesitate to explore any other related topics or issues on your mind !
                    </p>
                </div>
                <div className="banner-redir-btn">
                    <button className='button'>LEARN MORE</button>
                </div>
            </div>
            <div className="right-banner">
                <div className="banner-center">
                    <div className='banner-top-circle'></div>
                    <img src='assets/images/banner_img.jpg' className='banner-img' alt='banner'/>
                </div>

            </div>
        </div>
    )
}

export default Banner