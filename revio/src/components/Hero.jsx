import hero1 from "../assets/designer-life-concept-illustration.svg";
import hero2 from "../assets/designer-girl-concept-illustration.svg";
import bg from "../assets/Rectangle 3.svg";
import DownBtn from "./DownBtn";
const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <img src={hero1} alt="" className="absolute top-0 left-2 z-20" />
        <img
          src={bg}
          alt=""
          className="relative z-0 rounded-3xl m-auto mt-16"
        />
        <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full">
            <h1 className="gradient-text text-7xl mt-20 font-normal text-center h-24">Empower Learning.</h1>
            <p className="w-1/2 ml-20 font-semibold">Buy, sell, or donate educational resources, and make the most of your academic connections.</p>
            <div className="mt-36">
                <DownBtn />
            </div>
        </div>
        <img src={hero2} alt="" className="absolute right-2 bottom-0 z-20 " />
      </div>
    </>
  );
};

export default Hero;
