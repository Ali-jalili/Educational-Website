import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Page/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
