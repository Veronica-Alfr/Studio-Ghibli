import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import FilmsDetails from './pages/filmsDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        {/* <Route exact path="/films" element={ <Home /> } /> */}
        <Route exact path='/films/:id' element={ <FilmsDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
