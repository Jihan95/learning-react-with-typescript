import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from "react";
import MoviesContextProvider from './contexts/MoviesContextProvider';
import Layout from "./pages/Layout";
import FavoritesPage from './pages/FavouritesPage';

const HomePage =lazy(()=>import("./pages/HomePage"));
const MoviesPage =lazy(()=>import("./pages/MoviesPage"));
const MovieDetailsPage =lazy(()=>import("./pages/MovieDetailsPage"));
const NotFoundPage =lazy(()=>import("./pages/NotFoundPage"));
const AboutUsPage =lazy(()=>import("./pages/AboutUsPage"));



function App() {

  const routes = createBrowserRouter([
     {
      path:"/", element:<Layout></Layout>, children:[
        {index:true, element:<HomePage></HomePage>},
        {path:"about", element:<AboutUsPage></AboutUsPage>},
        {path:"movies", element:<MoviesPage></MoviesPage>},
        {path:"movies/:id", element:<MovieDetailsPage></MovieDetailsPage>},
        {path:"favourites", element: <FavoritesPage></FavoritesPage>}
      ]},
      {path:"*", element:<NotFoundPage></NotFoundPage>}
  ]
  );

  return (
    <>
    <Suspense fallback={<div>loading......</div>}>
    <MoviesContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </MoviesContextProvider>
    </Suspense>
    {/* <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="about" element={<AboutUsPage></AboutUsPage>}></Route>
        <Route path="movies" element={<MoviesPage></MoviesPage>}></Route>
        <Route path="movies/:id" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App
