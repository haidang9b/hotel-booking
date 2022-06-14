import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/authSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  },[]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
