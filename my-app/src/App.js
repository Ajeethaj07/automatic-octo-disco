import './App.css';
import React from 'react';
import LandingPage from './Components/Login';
import Table from './Components/Table';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path ="/" element={<LandingPage/>}/>
          <Route path ="/table" element ={<Table/>}/>
      </Routes>
      </BrowserRouter>
  );
}
export default App;
