import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Page/Home/Home';
import About from './Components/Page/About US/About';
import Team from './Components/Page/Team/Team';
import Allcoures from './Components/Page/All Coures/Allcoures.jsx'


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/courses' element={<Allcoures />} />

          <Route path='/about' element={<About />} />

          <Route path='/team' element={<Team />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
