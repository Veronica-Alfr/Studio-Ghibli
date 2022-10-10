import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Navigate, useNavigate } from "react-router-dom";
import fetchFilms from '../actions/filmsAction';
import Search from '../components/Search';

function Home() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const [navigator, setNavigator] = useState(false);

    //   const filmsList = useSelector((state) => state.films.data);

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
          <Search />
          {/* <div> */}
            {/* {filmsList.map(({ id, title, image }) => (
            <div key={ id }>
              <img src={ image } alt={ `Movie: ${ title }` } />
              <p>{ title }</p>
              <button>See more</button>
            </div>
          ))} */}
          {/* </div> */}
      </div>
    );
};

export default Home;
