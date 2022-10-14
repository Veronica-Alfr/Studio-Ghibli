import React from 'react';
import Search from '../components/Search';
// import { Navigate, useNavigate } from "react-router-dom";

function Home() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const [navigator, setNavigator] = useState(false);

    //   const filmsList = useSelector((state) => state.films.data);

    // const filmsDetails = (id) => {
    //   if (navigator === true ) {
    //     navigate(`/films/${id}`)
    //   }
    //   // <Navigate to={ `/films/${id}` } />
    // }

    return(
      <Search />
    );
};

export default Home;
