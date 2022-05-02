import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Components/Pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
