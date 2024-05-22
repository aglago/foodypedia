import { Home, RecipeFinder } from "../lib/exports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipefinder" element={<RecipeFinder />} />
        </Routes>
      </div>
    </Router>
  )
}
