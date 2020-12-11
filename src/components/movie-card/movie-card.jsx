import React from 'react'
import MovieControls from '../movie-controls/movie-control'
import './movie-card.styles.scss'


const MovieCard = ({movie,type}) => {
    return (
        <div className="movie-card">
            <div className="overlay">

            </div>
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}/>
                ): <div className="filler-poster"/>}

                <MovieControls type= {type} movie={movie}/>
            </div>
        </div>
    )
}

export default MovieCard
