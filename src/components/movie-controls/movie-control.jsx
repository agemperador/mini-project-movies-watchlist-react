import React, {useContext} from 'react'
import {GlobalContext} from '../../context/globalstate'
import './movie-control.scss'
import { FaTimes, FaEye,FaEyeSlash } from 'react-icons/fa';

const MovieControls = ({movie,type}) => {

    const {removeMovieFromWatchList, addMovieToWatched, moveToWatchlist,removeFromWatched} = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            {type === "watchlist" &&(
                <>
                    <button className="ctrl-btn"
                            onClick={()=> addMovieToWatched(movie)}>
                        <FaEye fill='white'/>
                    </button>
                    <button className="ctrl-btn"
                        onClick={()=>removeMovieFromWatchList(movie.id)}
                    >
                        <FaTimes fill='white' />
                    </button>
                </>
            )}
            {type === "watched" &&
            (
                <>
                    <button className="ctrl-btn"
                        onClick={()=> moveToWatchlist(movie)}>
                        <FaEyeSlash fill='white'/>
                    </button>
                    <button className="ctrl-btn"
                        onClick={()=> removeFromWatched(movie.id)}>
                        <FaTimes fill='white'/>
                    </button>
                </>
            )}

        </div>

    )
}

export default MovieControls
