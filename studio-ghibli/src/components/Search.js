import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchFilms from '../actions/filmsAction';
import fetchPeople from '../actions/peoplesAction';

function Search() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    // const [allFilms, setAllFilms] = useState([]);
    // const [allFilmsCopy, setAllFilmsCopy] = useState([]);
    // const [peoples, setPeoples] = useState([]);
    // console.log(peoples);
    const handleInputValue = ({ target }) => setInputValue(target.value);

    const filmsList = useSelector((state) => {
        console.log(state);
        console.log(state.films.data);
        return state.films.data;
    });


    useSelector((state) => {
        console.log(state.peoples.data);
        console.log(state);
        return state.peoples;
    });

    useEffect(() => {
       dispatch(fetchFilms());

        // const searchFilms = () => {
        //     if (inputValue.length === 0) {
        //         setAllFilmsCopy(filmsList);
        //     }
        //         const filterMovies = filmsList.filter(({ title }) => title.toLowerCase().includes(inputValue.toLowerCase()));
        //         // fazer o dispatch de filterMovies ?
        //         setAllFilmsCopy(filterMovies);
        // }
        // searchFilms();

    }, [dispatch]);

   const peoples = async () => {
        const peoplesList = await fetchPeople()(dispatch);
        console.log(peoplesList);
   }
   console.log(peoples());

    // realizar filtro por peoples também, realizando comparação pelo id de films
    
    const searchFilms = () => {
        if (inputValue.length === 0) {
            return filmsList;
        }
            const filterMovies = filmsList.filter(({ title }) => title.toLowerCase().includes(inputValue.toLowerCase()));
            // fazer o dispatch de filterMovies ?
            return filterMovies;
    }

    return(
        <div>
            <h2>Search</h2>
            <input type='search'
            placeholder='Search'
            onChange={ handleInputValue }
          />
           <div>
            {searchFilms().map(({ id, title, image }) => (
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
