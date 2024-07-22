import { Link } from "react-router-dom";
import logo from "../assets/revio.svg";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import GetStartedBtn from "./GetStartedBtn";
import CreateItemBtn from "./CreateItemBtn";

const Navbar = () => {
  const token = localStorage.getItem("jwtToken");

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50 flex flex-row justify-evenly py-4 bg-blend-saturation">
        <Link to="/" className="cursor-pointer flex justify-center items-center">
          {" "}
          <img src={logo} alt="" />
        </Link>

        <div>
          <ul className="flex flex-row gap-8 mt-2 font-sub text-base text-stone-700 font-semibold">
            <h1>
              <Link to="/marketplace">Marketplace</Link>
            </h1>
            <li>
              <a href="">Community</a>
            </li>
            <h1>
              <Link to="/me">Profile</Link>
            </h1>
          </ul>
        </div>
        <div className="flex gap-8 justify-center items-center">
          {token ? <CreateItemBtn /> : <GetStartedBtn />}
          <Link to="/bag">
            <LocalMallRoundedIcon className="text-blue-600 cursor-pointer"/>
          </Link>
          
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
