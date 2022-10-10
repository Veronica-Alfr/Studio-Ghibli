import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Navigate, useNavigate } from "react-router-dom";
import fetchFilms from '../actions/filmsAction';
import FilmsDetails from './filmsDetails';

function Home() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const [navigator, setNavigator] = useState(false);

      const filmsList = useSelector((state) => state.films.data);

    useEffect(() => {
        dispatch(fetchFilms());

    }, [dispatch]);

    // const filmsDetails = (id) => {
    //   if (navigator === true ) {
    //     navigate(`/films/${id}`)
    //   }
    //   // <Navigate to={ `/films/${id}` } />
    // }

    return(
      <div>
          <h1>STUDIO GHIBLI</h1>
          <FilmsDetails />
            {filmsList.map(({ id, title, image }) => (
            <div key={ id }>
              <img src={ image } alt={ `Movie: ${ title }` } />
              <p>{ title }</p>
              <button>See more</button>
            </div>
          ))}
      </div>
    );
};

export default Home;
