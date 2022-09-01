import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPosters/RowPost';
import { API_KEY } from './constants/constants'
import { Route, Link, Routes } from "react-router-dom";
import Genres from './components/Genres/Genres'

function App() {

  return (
 
    <div className="App">
        <NavBar />
      <Link to='/'></Link>
      <Routes>
        <Route path='/' element={
          <>
          
            <Banner />
            <RowPost title={'Originals'} data={`discover/tv?api_key=${API_KEY}&with_networks=213`} />
            <RowPost title={'Romance'} data={`/discover/movie?api_key=${API_KEY}&with_genres=10749`} />
            <RowPost title={'Action'} data={`/discover/movie?api_key=${API_KEY}&with_genres=28`} />
          </>
        }
        />
        <Route path='/Genres' element={<Genres />} />
        <Route path={`/Genre`} element={<RowPost route={'genre'} data={`/discover/movie?api_key=${API_KEY}&with_genres=`} />} />
      </Routes>


    </div>

  );
}

export default App;
