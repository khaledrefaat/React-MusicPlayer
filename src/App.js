import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import PlayLists from './containers/PlayLists';

import Header from './components/navigation/Header';
import PlayList from './containers/PlayList';

import './styles/app.scss';
import Library from './containers/Library';
import Upload from './containers/Upload';

const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/playlists" element={<PlayLists />} />
          <Route exact path="/playlist/new" element={<Upload />} />
          <Route exact path="/playlist/:id" element={<PlayList />} />
          <Route exact path="/user/library" element={<Library />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
