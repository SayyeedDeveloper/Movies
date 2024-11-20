import {useEffect, useState} from 'react';
import searchIcon from './search.svg';
import './App.css'
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=3013cdd2';


function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');
    const SearchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    //https://m.media-amazon.com/images/M/MV5BYWNiMmNlNm…TgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg

    useEffect(() => {
        SearchMovie('batman');
    }, []);
    return (
        <div className='app'>
            <h1>Movies</h1>
            <div className='search'>
                <input
                    placeholder={'Search for a movie'}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => {
                        SearchMovie(searchTerm)
                    }}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} key={movie.imdbID}/>
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;
