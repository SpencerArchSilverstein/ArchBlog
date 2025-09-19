import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Concerts from "./components/Concerts/Concerts";
import Albums from "./components/Albums/Albums";
import Navigation from "./Navigation";

function App() {
  // const [value, setValue] = useState("/");
  // const handleChange = (event:)
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
