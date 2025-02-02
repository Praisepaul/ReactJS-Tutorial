import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className="content">
                <h1 className='title'>
                    Movie Name
                </h1>
                <div className="banner_buttons">
                    <button type="button" className='button'> Play</button>
                    <button type="button" className='button'>My Lists</button>
                </div>
                <h1 className='description'>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing 
                    layouts and visual mockups.
                </h1>
            </div>
            <div className="fade">
                
            </div>
        </div>
    )
}

export default Banner