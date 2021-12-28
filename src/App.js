import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './shared/components/navigation/Header';
import PlayList from './songs/containers/PlayList';

import './styles/app.scss';

const App = () => {
  return (
    <Router>
      <main className="container">
        <Header />
        <PlayList />
      </main>
    </Router>
  );
};

export default App;
