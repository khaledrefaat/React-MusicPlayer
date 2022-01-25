import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './containers/Home';
import PlayLists from './containers/PlayLists';

import Header from './components/navigation/Header';
import PlayList from './containers/PlayList';

import './styles/app.scss';
import Library from './containers/Library';
import Upload from './containers/Upload';
import Auth from './containers/Auth';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationDate) > new Date()
    ) {
      dispatch(
        authActions.login({
          token: storedData.token,
          userId: storedData.userId,
          expirationDate: storedData.expirationDate,
        })
      );
    } else {
      dispatch(authActions.logout());
    }
  }, [dispatch]);

  const routes = () => {
    return token !== undefined ? (
      <>
        <Route index element={<Home />} />
        <Route path="user/profile/:userId" element={<Library />} />
        <Route path="/library" element={<Library />} />
        <Route path="playlists" element={<PlayLists />} />
        <Route path="playlist/new" element={<Upload />} />
        <Route path="playlist/:playlistId" element={<PlayList />} />
        {token !== null && <Route path="*" element={<Navigate to="/" />} />}
      </>
    ) : (
      <>
        <Route index element={<Home />} />
        <Route path="playlists" element={<PlayLists />} />
        <Route path="playlist/:id" element={<PlayList />} />
        <Route path="user/auth" element={<Auth />} />
        {token !== null && (
          <Route path="*" element={<Navigate to="/user/auth" />} />
        )}
      </>
    );
  };

  return (
    <Router>
      <main className="app">
        <Header />
        <Routes>{routes()}</Routes>
      </main>
    </Router>
  );
};

export default App;
