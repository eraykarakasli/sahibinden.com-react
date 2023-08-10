import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//pages
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Formika from "./formika/Formika";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/formika" element={<Formika />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
