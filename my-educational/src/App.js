import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Page/Home/Home';
import About from './Components/Page/About US/About';
import Team from './Components/Page/Team/Team';
import Allcoures from './Components/Page/All Coures/Allcoures.jsx'
import Journal from './Components/Page/Journal/Journal';
import Contact from './Components/Page/Contact Us/Contact';
import Login from './Components/Page/Login/Login';
import Singnup from './Components/Page/SignUp/Singnup';





function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/courses' element={<Allcoures />} />

          <Route path='/about' element={<About />} />

          <Route path='/team' element={<Team />} />

          <Route path='/journal' element={<Journal />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/login' element={<Login />} />

          <Route path='/singnup' element={<Singnup />} />

        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
