import Navbar from "../components/Navbar";

import ListItemBtn from "../components/ListItemBtn";
import AddIcon from "@mui/icons-material/Add";

const ListItem = () => {
  return (
    <>
      <Navbar />
      <div className="w-10/12 bg-white rounded-3xl mt-32 m-auto flex flex-row justify-between p-3 mb-4">
        <div>
          <div className="flex border border-stone-400 h-4/5 relative justify-center items-center rounded-2xl cursor-pointer">
            <p className="absolute top-14 text-xl font-sub font-semibold text-stone-400">
              Add Cover Image
            </p>
            <AddIcon className="text-stone-500" />
          </div>
          <div className="flex flex-row gap-1">
            <div className="border border-stone-400 h-44 w-44 m-3 rounded-md flex relative justify-center items-center cursor-pointer">
              <p className="absolute top-10 text-lg font-sub font-semibold text-stone-400">
                Add Preview
              </p>
              <AddIcon className="text-stone-500" />
            </div>
            <div className="border border-stone-400 h-44 w-44 m-3 rounded-md flex relative justify-center items-center cursor-pointer">
              <p className="absolute top-10 text-lg font-sub font-semibold text-stone-400">
                Add Preview
              </p>
              <AddIcon className="text-stone-500" />
            </div>
            <div className="border border-stone-400 h-44 w-44 m-3 rounded-md flex relative justify-center items-center cursor-pointer">
              <p className="absolute top-10 text-lg font-sub font-semibold text-stone-400">
                Add Preview
              </p>
              <AddIcon className="text-stone-500" />
            </div>
            {/* <img src={productimg} alt="" className=''/>
                    <img src={productimg} alt="" className='h-44 w-44 m-3 rounded-md'/>
                    <img src={productimg} alt="" className='h-44 w-44 m-3 rounded-md'/> */}
          </div>
        </div>
        <div className=" rounded-3xl bg-stone-50 w-1/2 p-8 flex flex-col justify-between">
          <div>
            {/* <h1 className='text-3xl font-heading font-bold'>ML Handbook</h1> */}
            <input
              type="text"
              name=""
              id=""
              className="border-b-2 border-stone-400 text-black font-heading font-bold text-3xl bg-stone-50 p-2 focus:border-b-2 focus:outline-none placeholder:font-normal"
              placeholder="Give a Title"
            />
            <div className="flex flex-row gap-5 mt-2">
              <select className="cursor-pointer outline-none text-xs font-semibold rounded-xl px-3 py-1 bg-stone-200">
                <option value="Book" className="cursor-pointer outline-none text-xs font-semibold rounded-xl px-3 py-1">
                  Book
                </option>
                <option value="Notes" className="cursor-pointer outline-none text-xs font-semibold rounded-xl px-3 py-1">
                  Notes
                </option>
                <option value="Donation" className="cursor-pointer outline-none text-xs font-semibold rounded-xl px-3 py-1">
                  Donation
                </option>
              </select>

              {/* <p className='font-sub font-bold text-slate-700'>PDF</p> */}
              {/* no pdf if its physical copy */}
            </div>
            {/* <p className="text-blue-700 font-sub font-semibold mt-4 cursor-pointer">
              by Adrian Miller
            </p> */}
            <textarea name="" id="" placeholder="Add a description" className="w-full border border-stone-200 bg-stone-50 h-44 mt-5 rounded-xl font-sub text-lg font-medium text-stone-500 p-4 outline-none">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptas alias laboriosam unde ipsa? Optio esse repellat alias iusto vitae!
            </textarea>
            <div className="flex justify-between mt-10">
                <select className="cursor-pointer outline-none font-sub text-xl font-bold text-stone-600 p-2 rounded-lg px-3 bg-stone-50">
                    <option value="Book" className="cursor-pointer outline-none  font-semibold rounded-xl px-3 py-1">
                    Physical Copy
                    </option>
                    <option value="Notes" className="cursor-pointer outline-none  font-semibold rounded-xl px-3 py-1">
                    Digital Copy
                    </option>
                </select>
                <input type="text" name="" id="" placeholder="Enter Price" className="font-sub text-2xl h-fit p-3 bg-stone-50  font-bold text-blue-700 placeholder:font-normal border-b-2 border-stone-400 outline-none w-44"/>

            </div>
            <input type="text" name="" id="" placeholder="Enter Quantity" className="font-sub text-lg font-bold text-stone-600 h-fit p-3 bg-stone-50 placeholder:font-normal border-b-2 border-stone-400 outline-none w-44"/>
          </div>
          <div className="mb-20 mt-10">
            <ListItemBtn />
          </div>
        </div>
      </div>
      {/* <h1 className="ml-40 font-heading font-bold text-2xl mt-32">
        Related resources
      </h1>
      <div className="w-10/12 bg-stone-100 rounded-3xl mt-5 m-auto p-4 mb-4">
        <div className="flex flex-row gap-7">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div> */}
    </>
  );
};

export default ListItem;
