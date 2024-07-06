import { Link } from 'react-router-dom';
import logo from '../assets/revio.svg';

import GetStartedBtn from './GetStartedBtn';
const Navbar = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full bg-white z-50 flex flex-row justify-evenly py-4 bg-blend-saturation">
    <img src={logo} alt="" />
    <div>
        <ul className="flex flex-row gap-8 mt-2 font-sub text-base text-stone-700 font-semibold">
          <h1>
          <Link to="/marketplace">
            Marketplace
          </Link>
          </h1>
            
            <li><a href="">Popular</a></li>
            <li><a href="">Community</a></li>
        </ul>
    </div>
    <GetStartedBtn/>
    <div></div>
</div>

    </>
  )
}

export default Navbar