import React, {useContext} from 'react'
import {GlobalContext} from '../../context/globalstate'
import MovieCard from '../../components/movie-card/movie-card'

const Watched = () => {

    const {watched} = useContext(GlobalContext)

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <span className='title'>
                    My Watched Movies
                    </span>
                    <span className="count-pill">
                        {watched.length} {watched.length === 1 ? 'Movies' : 'Movies'}
                    </span>
                </div>
                
                <div className="movie-grid">
                {watched.length ? 
                    watched.map((movie)=>(
                        <MovieCard movie={movie} type='watched' key={movie.id}/>
                        )) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Watched
