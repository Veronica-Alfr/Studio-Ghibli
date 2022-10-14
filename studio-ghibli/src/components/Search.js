import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import API from '../actions/baseURL';
import { fetchFilms } from '../actions/filmsAction';
import { fetchLocations } from '../actions/locationAction';
import { fetchPeople } from '../actions/peoplesAction';

// a requisição de personagens pode ser feita dentro dos reducers, seria uma boa nesse caso reduxToolkit

function Search() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    const [movies, setMovies] = useState([]);

    const handleInputValue = ({ target }) => setInputValue(target.value);

    const filmsList = useSelector((state) => {
        return state.films.data;
    });
    
    const peoplesList = useSelector((state) => {
        return state.peoples.data;
    });
    
    const locationList = useSelector((state) => {
        return state.locations.data;
    });

    useEffect(() => {
        searchFilms();
    }, [inputValue]);

    useEffect(() => {
        setMovies(filmsList);
    }, [filmsList]);

    useEffect(() => {
        dispatch(fetchFilms());
        dispatch(fetchPeople());
        dispatch(fetchLocations());

    }, []);

    const textIncludes = (text) => {
        return text.toLowerCase().includes(inputValue.toLowerCase());
    };

    const searchFilms = () => {
        if (inputValue.length > 0) {
            const moviesFilter = filmsList.filter((movie) => {
                if (textIncludes(movie.title)) return true;
                
                const movieByCharacter = peoplesList.find((people) => {
                    const filmIdByUrlPeople = people.films[0].split('/', 5);
                    const filmId = filmIdByUrlPeople[4];

                    if (movie.id === filmId) return textIncludes(people.name);
                });

                if (!!movieByCharacter) return true;

                const movieByLocation = locationList.find((location) => {
                    const filmIdByUrlLocation = location.films[0].split('/', 5);
                    const idFilm = filmIdByUrlLocation[4];

                    if (movie.id === idFilm) return textIncludes(location.name);
                });

                console.log('Localização ', movieByLocation);

                return !!movieByLocation;
            });
           setMovies(moviesFilter);
        };
    };

    return(
        <div>
            <h2>Movies</h2>
            <input type='search'
            placeholder='Search for title movie, author name or animation location'
            onChange={ handleInputValue }
          />
           <div>
            {movies.length > 0 && movies.map(({ id, title, image }) => (
            <div key={ id }>
              <img src={ image } alt={ `Movie: ${ title }` } />
              <p>{ title }</p>
              <button>See more</button>
            </div>
          ))}
          </div>
        </div>
    )
};

export default Search;
