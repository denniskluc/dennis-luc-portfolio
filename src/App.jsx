import  { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experience" element={<Experience />}/>
      </Routes>
    </>
  )
}

export default App;
