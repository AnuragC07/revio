import { Link } from "react-router-dom";
const DeleteItemBtn = () => {
  return (
    <>
        <div className="border-2 bg-slate-700 border-stone-100  text-white w-fit p-1 px-4 rounded-xl cursor-pointer h-10 font-heading">
        <Link
              to="/"
            >
              <p className="pt-1">Remove from Bag</p>
            </Link>
            
        </div>
    </>
  )
}

export default DeleteItemBtn