import Navbar from "../components/Navbar";
import userimg from "../assets/OIP.jpeg";
import EditIcon from "@mui/icons-material/Edit";
import ItemCard from "../components/ItemCard";

const PublicUser = () => {
  return (
    <>
    {/* THIS IS PAGE FOR A LOGGED IN USER. ME  */}
      <Navbar />
      <div className="w-full bg-stone-50 flex justify-around mt-20 p-10">
        <div className="flex gap-10">
          <img src={userimg} alt="" className="h-32 w-32 rounded-2xl" />

          <div className="w-80 bg-white rounded-2xl p-5">
            <h1 className="text-3xl font-heading font-bold mb-10">
              Adrian Miller
            </h1>
            <p className="text-lg text-stone-500 font-sub font-semibold">
              BTech CSE
            </p>
            <p className="text-lg text-stone-500 font-sub font-semibold">
              Harvard University
            </p>
          </div>
        </div>
        <p className="hidden">
          <EditIcon className="text-stone-400 border rounded-full p-1 bg-white shadow cursor-pointer " />
        </p>
      </div>
      <div>
        <h1 className="ml-40 font-heading font-bold text-2xl mt-32">
          Listed Resources
        </h1>
        <div className="w-10/12 bg-stone-100 rounded-3xl mt-5 m-auto p-4 mb-4">
          <div className="flex flex-row gap-7">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicUser;
