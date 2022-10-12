import API from '../actions/baseURL';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchFilms from '../actions/filmsAction';
import fetchPeople from '../actions/peoplesAction';

// a requisição de personagens pode ser feita dentro dos reducers, seria uma boa nesse caso reduxToolkit

function Search() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    const [filmsCopy, setFilmsCopy] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [peoplesCopy, setPeoplesCopy] = useState([]);
    const [locationCopy, setLocationCopy] = useState([]);

    const handleInputValue = ({ target }) => setInputValue(target.value);

    const filmsList = useSelector((state) => {
        console.log(state);
        return state.films.data;
    });

    // useSelector((state) => {
    //     console.log(state);
    //     console.log(state.peoples.data);
    //     return state.peoples.data;
    // });

    useEffect(() => {
        dispatch(fetchFilms());
        dispatch(fetchPeople());

    //    const getCharacters = async () => {
    //         const listPeoples = await API.get('/people');
    //         setPeoples(listPeoples);
    //    };

    //    getCharacters();

    }, []);

    // realizar filtro por peoples também, realizando comparação pelo id de films
    //    const filterMoviesByTitle = moviesList.filter(({ title }) => title.toLowerCase().includes(inputValue.toLowerCase()));
    //    const filterMoviesByCharacter = charactersList.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()));
    
    const searchFilms = () => {
    //    const moviesList = [...filmsList];
    //    const charactersList = [...peoplesList];
    // usar state peoples para filtro

        if (inputValue.length > 0) {
            const filterMovies = filmsList.filter(({ title }) => title.toLowerCase().includes(inputValue.toLowerCase()));
           
            return filterMovies;
        }
        return filmsList;
    }

    // console.log(peoples); // funciona, améeeem

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
