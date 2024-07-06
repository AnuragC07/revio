import { Routes, Route } from "react-router-dom";

import Market from './pages/Market';
import Home from './pages/Home';
import Productpage from "./pages/Productpage";
import User from "./pages/User";
import PublicUser from './pages/PublicUser';
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Market />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/me" element={<User />} />
      <Route path="/user" element={<PublicUser />} />
    </Routes>
    </>
  )
}

export default App
