import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCard from "./assets/components/allCard";
import AddCard from './assets/components/addCard';

export const URL = 'http://localhost:5000/api';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<AllCard/>}/>
      <Route path="/addCard" element={<AddCard/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
