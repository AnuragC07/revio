import { Link } from "react-router-dom";
import logo from "../assets/revio.svg";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import GetStartedBtn from "./GetStartedBtn";
import CreateItemBtn from "./CreateItemBtn";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import PeopleTwoToneIcon from "@mui/icons-material/PeopleTwoTone";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
const Navbar = () => {
  const token = localStorage.getItem("jwtToken");

  return (
    <>
      <div className="flex border fixed top-5 p-2 left-1/2 transform -translate-x-1/2 shadow-md rounded-full w-fit gap-6 justify-center items-center m-auto z-50 bg-white">
        <Link
          to="/"
          className="cursor-pointer flex justify-center items-center mr-10 ml-4"
        >
          {" "}
          <img src={logo} alt="" className=""/>
        </Link>

        <div>
          <ul className="flex flex-row gap-8 mt-2 font-sub text-base text-stone-700 font-semibold">
            <h1>
              <Link to="/marketplace">
                <StorefrontTwoToneIcon className="text-blue-800"/>
              </Link>
            </h1>
            <li>
              <a href="">
                <PeopleTwoToneIcon className="text-blue-800"/>
              </a>
            </li>
            <h1>
              <Link to="/me">
                <PersonTwoToneIcon className="text-blue-800"/>
              </Link>
            </h1>
            <Link to="/bag">
              <ShoppingCartTwoToneIcon className="text-blue-800"/>
            </Link>
          </ul>
        </div>
        <div className="flex gap-8 justify-center items-center ml-10">
          {token ? <CreateItemBtn /> : <GetStartedBtn />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
