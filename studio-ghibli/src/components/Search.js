import { useState } from 'react';
import { useSelector } from 'react-redux';

function Search() {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = ({ target }) => setInputValue(target.value);

    const peoplesList = useSelector((state) => state.peoples.data);
    console.log(peoplesList)
    const filmsList = useSelector((state) => state.films.data);
    
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
