import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios.js'
import { APIKey, imageUrl } from '../Constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${APIKey}&language=en-US`).then((response) => {
            setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random()}) [0])
        })
    }, [])
    return (
        <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
            <div className="content">
                <h1 className='title'> { movie ? movie.title : " Nothing to Show" } </h1>
                <p className='description'> { movie ? movie.overview : "No description"} </p>
                <div className="banner_buttons">
                    <button type="button" className='button'> Play</button>
                    <button type="button" className='button'>My Lists</button>
                </div>
            </div>
            <div className="fade">
                
            </div>
        </div>
    )
}

export default Banner