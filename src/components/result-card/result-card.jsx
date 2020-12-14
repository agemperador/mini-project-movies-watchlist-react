import React, {useContext} from 'react';
import {GlobalContext } from '../../context/globalstate'
import './result-card.styles.scss'

const ResultCard = ({movie}) => {

    const {addMovieToWatchList, watchlist,watched, addMovieToWatched} = useContext(GlobalContext)

    let storedMovie = watchlist.find(o => o.id === movie.id)
    let storedMovieWatched = watched.find( o=>o.id === movie.id)

    let  watchlistDisabled = storedMovie || storedMovieWatched ? true : false
    let watchedDisabled = storedMovieWatched ? true : false

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}/>
                ): <div className="filler-poster">

                </div>
                }
            </div>
            <div className="data-container">
                <div className="info">
                    <div className="header">
                        <h3 className="title">{movie.title}</h3>
                        <h4 className="release-date">
                            {movie.release_date ?
                            movie.release_date.substring(0,4) :
                            `-`}
                        </h4>
                    </div>
                </div>
                <div className="controls">
                    <button className={`btn ${watchlistDisabled ? 'disabled' : ''}`}
                        
                        onClick={()=>!watchedDisabled? addMovieToWatchList(movie) : null} >
                        {watchlistDisabled? `Added`: `Add to Watchlist`}
                    </button>
                    <button className= {`btn ${watchedDisabled ? 'disabled' : ''}`}

                        onClick={()=> !watchedDisabled? addMovieToWatched(movie) : null}>
                        {watchedDisabled? `Watched`: `Add to Watched`}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
