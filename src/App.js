
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bar from './components/Bar';
import LoginPage from './components/LoginPage';
import ProductPage from "./components/ProductPage";
import UserRegisterPage from './components/UserRegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Bar/>
        <Routes>
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<UserRegisterPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
