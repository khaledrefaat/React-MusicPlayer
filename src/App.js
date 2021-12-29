import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';

import Header from './shared/components/navigation/Header';
import PlayList from './songs/containers/PlayList';

import './styles/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:id" element={<PlayList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
