
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';
import Navbar from './layout/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/read/:bookId" element={<Read/>}></Route>
        <Route path="/update/:bookId" element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
