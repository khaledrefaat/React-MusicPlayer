import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import PlayLists from './containers/PlayLists';

import Header from './components/navigation/Header';
import PlayList from './containers/PlayList';

import './styles/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<PlayLists />} />
          <Route path="/playlist/:id" element={<PlayList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
