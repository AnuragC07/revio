import hero1 from "../assets/designer-life-concept-illustration.svg";
import hero2 from "../assets/designer-girl-concept-illustration.svg";
import bg from "../assets/Rectangle 3.svg";
import hero3 from "../assets/hand-drawn-business-communication-illustration 1.svg";
import hero4 from "../assets/hand-drawn-data-concept-illustrated 1.svg";

import logo from "../assets/revio.svg";
import DownBtn from "../components/DownBtn";
import GetStartedBtn from "../components/GetStartedBtn";
import ItemCard from "../components/ItemCard";
import BrowseMoreBtn from "../components/BrowseMoreBtn";
import Navbar from '../components/Navbar';

import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './styles.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 2000});
  }, []);

  return (
    <>
    <Navbar />
      <div className="relative flex flex-col items-center justify-center mt-20">
        <img src={hero1} alt="" className="absolute top-0 left-2 z-20" />
        <img
          src={bg}
          alt=""
          className="relative z-0 rounded-3xl m-auto mt-16"
        />
        <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="gradient-text text-7xl mt-20 font-semibold text-center h-24 font-heading">
            Empower Learning.
          </h1>
          <p className="w-1/2 ml-20 font-semibold text-lg font-sub text-slate-500">
            Buy, sell, or donate educational resources and make the most out of
            your academic connections.
          </p>
          <div className="mt-36 w-fit">
            <DownBtn />
          </div>
        </div>
        <img src={hero2} alt="" className="absolute right-2 bottom-0 z-20 " />
      </div>

      <div className="flex flex-row justify-around p-8 rounded-3xl w-4/5 m-auto mt-16 bg-stone-100" data-aos="zoom-in"   data-aos-duration="700">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="gradient-text text-4xl font-semibold h-12 font-heading">
              Leverage your network
            </h1>
            <p className="font-semibold font-sub text-lg">
              Turn your old notes, books, and study materials into a valuable
              resource for other students. Join our community to buy, sell, or
              donate educational resources, and make the most of your academic
              connections.
            </p>
          </div>
        </div>
        <img src={hero3} alt="" className="m-10" />
      </div>

      <div className="flex flex-col justify-center items-center scrollbar"> 
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
      </div>

      <div className="bg-stone-50 w-full py-20" >
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
      </div>
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
