import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import API from '../actions/baseURL';
import { fetchFilms, fetchFilmsById } from '../actions/filmsAction';
import { fetchPeople } from '../actions/peoplesAction';

// a requisição de personagens pode ser feita dentro dos reducers, seria uma boa nesse caso reduxToolkit

function Search() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    // const [idMovie, setIdMovie] = useState('');

    const handleInputValue = ({ target }) => setInputValue(target.value);

    const filmsList = useSelector((state) => {
        console.log(state);
        return state.films.data;
    });

    const peoplesList = useSelector((state) => {
        return state.peoples.data;
    });

    useEffect(() => {
        dispatch(fetchFilms());
        dispatch(fetchPeople());
    }, []);
    
    const filmById = async (id) => {
        try {
            const movieById = await API.get(`/films/${id}`);
            return movieById.data;
        } catch(err) {
            console.log(err);
        }
    }

    const searchFilms = () => {
       const moviesList = [...filmsList];
       const charactersList = [...peoplesList];

        if (inputValue.length > 0) {
            return moviesList.filter((movie) => {
                const movieByName = movie.title.toLowerCase().includes(inputValue.toLowerCase());
                return charactersList.find((character) => {
                    const movieByCharacter = character.name.toLowerCase().includes(inputValue.toLowerCase());
                    const filmIdByUrlBreaked = character.films[0].split('/', 5);
                    const filmId = filmIdByUrlBreaked[4]
                    if (movieByCharacter && movie.id === filmId) {
                        return filmById(filmIdByUrlBreaked[4]);
                        // Mas e se fizer uma função que intercepta o id, passa na chamada da função do fetch e dps dispara a função?
                    }
                    return movieByName;
                })
            });
        }
        return moviesList;
    }

    return(
        <div>
            <h2>Movies</h2>
            <input type='search'
            placeholder='Search'
            onChange={ handleInputValue }
          />
           <div>
            {searchFilms() && searchFilms().map(({ id, title, image }) => (
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
