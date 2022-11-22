import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiTwotoneStar } from 'react-icons/ai';
import { fetchFilms } from '../actions/filmsAction';
import { fetchLocations } from '../actions/locationAction';
import { fetchPeople } from '../actions/peoplesAction';

function Search() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputValue = ({ target }) => setInputValue(target.value);

  const filmsList = useSelector((state) => state.films.data);

  const peoplesList = useSelector((state) => state.peoples.data);

  const locationList = useSelector((state) => state.locations.data);

  useEffect(() => {
    setMovies(filmsList);
  }, [filmsList]);

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchPeople());
    dispatch(fetchLocations());
  }, []);

  const textIncludes = (text) => text.toLowerCase().includes(inputValue.toLowerCase());

  const searchFilmsByTitle = () => {
    const moviesFilterByTitle = filmsList.filter((movie) => textIncludes(movie.title));
    return moviesFilterByTitle;
  };

  const five = 5;

  const searchFilms = (list) => {
    const moviesFilter = filmsList.filter((movie) => {
      const moviesList = list.find((el) => {
        const filmIdByUrlPeople = el.films[0].split('/', five);
        const filmId = filmIdByUrlPeople[4];

        if (movie.id === filmId) return textIncludes(el.name);
        return false;
      });
      return !!moviesList;
    });
    return moviesFilter;
  };

  const searchFilmsByPeople = () => searchFilms(peoplesList);
  const searchFilmsByLocation = () => searchFilms(locationList);

  const getMoviesByFilter = () => {
    if (inputValue.length > 0) {
      const filmsByTitle = searchFilmsByTitle();
      const filmsByPeople = searchFilmsByPeople();
      const filmsByLocation = searchFilmsByLocation();

      const filmsSearch = [];

      const checkHasFilmsById = (film) => {
        const hasContainer = filmsSearch.find((search) => film.id === search.id);
        if (!hasContainer) {
          filmsSearch.push(film);
        }
      };

      filmsByTitle.forEach(checkHasFilmsById);

      filmsByPeople.forEach(checkHasFilmsById);

      filmsByLocation.forEach(checkHasFilmsById);

      setMovies(filmsSearch);
    }
  };

  useEffect(() => {
    getMoviesByFilter();
  }, [inputValue]);

  const ten = 10;

  return (
    <main>
      <header>
        <h1>STUDIO GHIBLI</h1>
        <input
          type="search"
          placeholder="Search for title movie, author name or animation location"
          onChange={ handleInputValue }
        />
      </header>
      <div className="container-films">
        {movies.length > 0 && movies.map(({ id, title, image, rt_score: score }) => (
          <div key={ id } className="card-film">
            <img src={ image } alt={ `Movie: ${title}` } />
            <div className="text">
              <AiTwotoneStar className="star" />
              <p>{ Number(score / ten).toFixed(1) }</p>
              <p>{ title }</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Search;
