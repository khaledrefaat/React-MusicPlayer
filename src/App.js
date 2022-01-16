import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import PlayLists from './containers/PlayLists';

import Header from './components/navigation/Header';
import PlayList from './containers/PlayList';

import './styles/app.scss';
import Library from './containers/Library';
import Upload from './containers/Upload';
import Auth from './containers/Auth';

import { AuthContext } from './components/context/auth-context';
import useAuth from './components/hooks/auth-hook';

const App = () => {
  const { token, userId, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token, login, logout, userId }}
    >
      <Router>
        <main className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/playlists" element={<PlayLists />} />
            <Route exact path="/playlist/new" element={<Upload />} />
            <Route exact path="/playlist/:id" element={<PlayList />} />
            <Route exact path="/user/library" element={<Library />} />
            <Route exact path="/user/auth" element={<Auth />} />
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
