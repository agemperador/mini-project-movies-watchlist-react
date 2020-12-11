import React, {useState} from 'react'
import ResultCard from '../../components/result-card/result-card'

import './add.styles.scss'


const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const lang = 'en-US'
    const page = 1
    const adult = false
    const api_key =process.env.REACT_APP_TMDB_KEY

    const handleChange = e =>{
        e.preventDefault()

        setQuery(e.target.value);
        
        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${api_key}&language=${lang}&page=${page}&include_adult=${adult}&query=${query}`)
            .then((res)=>res.json())
            .then(data=>{
                if (!data.errors) setResults(data.results)
                else setResults([])
                console.log(data)
            })
            console.log(results)
    };
    
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <div className="text">
                                <input type="text" 
                                id="search"
                                value={query}
                                onChange={handleChange}
                                />
                                <label htmlFor="search" >
                                        Search Movies</label>
                        </div>
                    </div>
                    {results ? 
                    <ul className="results">
                        {results.map(movie=>(
                            <li key={movie.id}>
                                <ResultCard movie= {movie}/>
                            </li>
                        ))}

                    </ul>:null
                }
                </div>
            </div>
        </div>

    )
}

export default Add
