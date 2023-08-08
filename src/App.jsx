import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//pages
import Home from "./pages/Home"
import Detail from "./pages/Detail"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
