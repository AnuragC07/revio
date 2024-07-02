import logo from '../assets/revio.svg';

import GetStartedBtn from './GetStartedBtn';
const Navbar = () => {
  return (
    <>
    <div className='flex flex-row justify-evenly m-4'>
        <img src={logo} alt="" />
        <div>
            <ul className='flex flex-row gap-8 mt-2'>
                <li><a href="">Marketplace</a></li>
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