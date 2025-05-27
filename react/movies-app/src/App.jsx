import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import AboutUsPage from './pages/AboutUsPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="about" element={<AboutUsPage></AboutUsPage>}></Route>
        <Route path="movies" element={<MoviesPage></MoviesPage>}></Route>
        <Route path="movies/:id" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
