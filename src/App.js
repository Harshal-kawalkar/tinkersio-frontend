import SignInSide from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonDetails from "./components/Pokemon";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<SignInSide />}></Route>
        <Route exact path='/pokemon' element={< PokemonDetails/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
