import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokemones from "./components/Pokemones";
import Details from "./components/pages/Details";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
