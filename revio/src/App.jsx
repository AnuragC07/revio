import { Routes, Route } from "react-router-dom";

import Market from './pages/Market';
import Home from './pages/Home';
import Productpage from "./pages/Productpage";
import User from "./pages/User";
import PublicUser from './pages/PublicUser';
import ListItem from "./pages/ListItem";
import MyinfoEdit from "./pages/MyinfoEdit";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/marketplace" element={<Market />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/me" element={<User />} />
      <Route path="/user" element={<PublicUser />} />
      <Route path="/listproduct" element={<ListItem />} />
      <Route path="/me/edit" element={<MyinfoEdit />} />
    </Routes>
    </>
  )
}

export default App
