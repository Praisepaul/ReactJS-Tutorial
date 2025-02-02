import React from 'react'
import './RowPost.css'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { APIKey, imageUrl } from '../Constants/constants'
import YouTube from 'react-youtube'
import { error } from 'ajv/dist/vocabularies/applicator/dependencies'

function RowPost( props ) {
  const [movie, setMovie] = useState([])
  const [youtubeID, setYoutubeID] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response =>{
      setMovie(response.data.results)
    }).catch(error => {
      //alert("Data Fetch Error")
    })
  }, [])

  const options = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };

  const previewVideos = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${APIKey}&language=en-US`).then(response => {
      if(response.data.results.length !== 0){
        setYoutubeID(response.data.results[0])
      } else {
        alert("No Video Available")
      }
    })
    .catch(error => {
      alert("Error playing this video!")
    })
  }

  return (
    <div className='row'>
        <h2 style={{marginTop: '1rem'}}> { props.title }</h2>
        <div className="posters">
          { movie.map((obj) =>
            <img onClick={() => previewVideos(obj.id)} className= {props.isSmall ? 'smallPoster' : 'poster' } src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
          )}
        </div>

        { youtubeID && <YouTube videoId={youtubeID.key} opts={options}/> }
    </div>
  )
}

export default RowPost