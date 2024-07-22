import { Link } from "react-router-dom";
const DeleteItemBtn = () => {
  return (
    <>
        <div className="border-2 border-stone-100 shadow-md text-red-600 w-fit p-1 px-4 rounded-xl cursor-pointer h-10 font-heading">
        <Link
              to="/"
            >
              <p className="pt-1">Delete Item</p>
            </Link>
            
        </div>
    </>
  )
}

export default DeleteItemBtn