import {useEffect} from 'react';
import searchIcon from './search.svg';
import './App.css'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3013cdd2';

function App() {
    const SearchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    const FirstMovie = {
        Title: "Italian Spiderman",
        Year: "2007",
        imdbID: "tt2705436",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNm…TgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
    }

    useEffect(() => {
        SearchMovie('Spiderman');
    }, []);
    return (
        <div className='app'>
            <h1>Movies</h1>
            <div className='search'>
                <input
                    placeholder={'Search for a movie'}
                    value='Superman'
                    onChange={() => {
                    }}
                />
                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => {
                    }}
                />
            </div>
        </div>
    );
}

export default App;
