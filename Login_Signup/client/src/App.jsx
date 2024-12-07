import React from 'react';
import SignupForm from './signUp';
import LoginForm from './login';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignupForm />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
