import Navbar from "../components/Navbar";


const MyinfoEdit = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-semibold m-auto mt-36 flex justify-center items-center">
        Update your profile info
      </h1>
      <div className="w-ful flex justify-around mt-10 p-10">
        <div className="flex flex-col gap-10 justify-between">
          <div className="w-96 bg-stone-100 rounded-2xl p-5 flex flex-col gap-3">
           <input type="text" className="w-full h-10 rounded-lg bg-white border border-stone-300 placeholder:font-semibold px-3 text-black font-bold"  placeholder="Your Username"/>
           <input type="text" className="w-full h-10 rounded-lg bg-white border border-stone-300 placeholder:font-semibold px-3 text-black font-bold"  placeholder="Your Education info"/>
           <input type="text" className="w-full h-10 rounded-lg bg-white border border-stone-300 placeholder:font-semibold px-3 text-black font-bold"  placeholder="Your Educational Institution"/>
          </div>
          <button className="font-semibold font-heading cursor-pointer rounded-lg text-white bg-blue-600 px-3 py-2">Update Info</button>
        </div>
      </div>
    </>
  );
};

export default MyinfoEdit;
