
import bg from "../assets/bg.jpg";
import hero1 from "../assets/Rectangle 72.svg";
import hero2 from "../assets/A paper airplane with a check mark.svg";
import hero3 from "../assets/Group 14.svg";
import hero4 from "../assets/Group 15.svg";
import hero5 from "../assets/Project management workflow.svg";
import hero6 from "../assets/Group 16.svg";
import hero7 from "../assets/Group 17.svg";
import hero8 from "../assets/Group 18.svg";

import logo from "../assets/revio.svg";
import DownBtn from "../components/DownBtn";
import GetStartedBtn from "../components/GetStartedBtn";
// import ItemCard from "../components/ItemCard";
// import BrowseMoreBtn from "../components/BrowseMoreBtn";
import Navbar from '../components/Navbar';

import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './styles.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 2000});
  }, []);
  const handleExploreButtonClick = () => {
    // Smooth scroll to the "Latest Articles" section
    const latestArticlesSection = document.getElementById("hero2");
    latestArticlesSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <Navbar />
      <div className="flex flex-col items-center justify-center bg-cover">
        {/* <img src={hero1} alt="" className="absolute top-0 left-2 z-20" /> */}
        <img
          src={bg}
          alt=""
          className="w-full bg-cover relative rounded-3xl"
        />
        <div>

        </div>
        <div className="absolute top-56 flex flex-col items-center justify-center">
          <h1 className="text-slate-800 text-7xl font-bold text-center h-24 font-hero">
            Empower Learning.
          </h1>
          <p className="w-1/2 ml-20 font-semibold text-lg font-sub text-slate-500">
            Buy, sell, or donate educational resources and make the most out of
            your academic connections.
          </p>


          <div className="mt-36 w-fit" onClick={handleExploreButtonClick}>
            <DownBtn />
          </div>
          <div className="relative mt-44">
            <img src={hero1} data-aos="slide-up" data-aos-duration="700"/>
            <img src={hero2} className="absolute bottom-40 right-0" data-aos="zoom-in" data-aos-duration="700"/>
            <img src={hero3} className="absolute bottom-16 left-10" data-aos="zoom-in" data-aos-duration="700"/>
            <img src={hero4} className="absolute top-16 right-20" data-aos="slide-left" data-aos-duration="700"/>
            <img src={hero5} className="absolute top-36 left-32" data-aos="zoom-in" data-aos-duration="700"/>
          </div>
          
          
        </div>
        {/* <img src={hero2} alt="" className="absolute right-2 bottom-0 z-20 " /> */}
      </div>

      <div className="flex flex-col justify-around p-8 w-full m-auto bg-stone-800 border-t-2 rounded-t-3xl">
        <div>
          <h2 className="font-heading mt-28 text-white text-3xl justify-center items-center flex">GET STARTED IN A FEW CLICKS</h2>
        </div>
        <div className="flex mt-10">
          <img src={hero6} alt="" className="h-1/3 w-1/3"/>
          <img src={hero7} alt="" className="h-1/3 w-1/3 mt-28"/>
          <img src={hero8} alt="" className="h-1/3 w-1/3 mt-44"/>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center scrollbar"> 
        <div className="bg-stone-50 w-full  mt-32 p-8 flex flex-col justify-center items-center gap-10" >
          <h1 className="text-5xl font-heading m-16 font-light" >Marketplace</h1>
          <div className="flex flex-row gap-10 overflow-x-auto overflow-y-hidden max-w-7xl mx-32 mb-24">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center bg-stone-50 w-full">
          <BrowseMoreBtn />
        </div>
      </div> */}

      {/* <div className="bg-stone-50 w-full py-20" >
        <div className="flex flex-row justify-around p-8 rounded-3xl w-4/5 m-auto mt-16 bg-white" data-aos="zoom-out" data-aos-duration="700">
          <img src={hero4} alt="" className="m-10" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="gradient-text text-4xl font-bold h-12 font-heading">
                Maximize your impact
              </h1>
              <p className="font-semibold font-sub text-lg text-slate-500">
                Unlock the potential of your past study efforts by selling or
                donating your notes, textbooks, and study guides. Connect with
                fellow students to make education more affordable and accessible
                for everyone. Join us and start making a difference today.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col gap-10 justify-center items-center mt-16">
        <h2 className="text-3xl" data-aos="fade-out"   data-aos-duration="700">Make a mark.</h2>
        <GetStartedBtn />
      </div>

      <footer className="flex w-4/5 justify-around rounded-3xl p-10 bg-slate-800 m-auto mt-20 mb-5 h-72">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-row gap-10 text-white">
          <div>
            <h3 className="text-lg font-semibold text-slate-500">Product</h3>
            <ul className="text-slate-400">
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Change log</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Inspiration</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-500">Company</h3>
            <ul className="text-slate-400">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-500">Follow us</h3>
            <ul className="text-slate-400">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;
