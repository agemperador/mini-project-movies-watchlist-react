import React,{useContext} from 'react'
import MovieCard from '../../components/movie-card/movie-card'
import {GlobalContext} from '../../context/globalstate'
import './watchlist.styles.scss'
 
const Watchlist = () => {

    const {watchlist} = useContext(GlobalContext)
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <span className='title'>My Watchlist</span>
                    <span className="count-pill">
    {watchlist.length} {watchlist.length === 1 ? 'Movies' : 'Movies'}
                    </span>
                </div>
                
                <div className="movie-grid">
                {watchlist.length ? 
                    watchlist.map((movie)=>(
                        <MovieCard movie={movie} type='watchlist' key={movie.id}/>
                        )) : null
                    }
                </div>
            </div>
        </div>
                
    )
}

export default Watchlist
