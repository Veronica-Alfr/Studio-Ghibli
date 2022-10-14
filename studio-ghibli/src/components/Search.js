/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable array-callback-return */
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

  const five = 5;

  const searchFilms = () => {
    if (inputValue.length > 0) {
      const moviesFilter = filmsList.filter((movie) => {
        if (textIncludes(movie.title)) return true;

        const movieByCharacter = peoplesList.find((people) => {
          try {
            const filmIdByUrlPeople = people.films[0].split('/', five);
            const filmId = filmIdByUrlPeople[4];

            if (movie.id === filmId) return textIncludes(people.name);
          } catch (err) {
            return console.log(err);
          }
        });

        if (movieByCharacter) return true;

        const movieByLocation = locationList.find((location) => {
          try {
            const filmIdByUrlLocation = location.films[0].split('/', five);
            const idFilm = filmIdByUrlLocation[4];

            if (movie.id === idFilm) return textIncludes(location.name);
          } catch (err) {
            return console.log(err);
          }
        });

        console.log('Localização ', movieByLocation);

        return !!movieByLocation;
      });
      setMovies(moviesFilter);
    }
  };

  useEffect(() => {
    searchFilms();
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
