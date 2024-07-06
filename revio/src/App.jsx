import { Routes, Route } from "react-router-dom";

import Market from './pages/Market';
import Home from './pages/Home';
import Productpage from "./pages/Productpage";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Market />} />
      <Route path="/product" element={<Productpage />} />
      
    </Routes>
    </>
  )
}

export default App
