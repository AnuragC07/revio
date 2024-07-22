import { Link } from "react-router-dom";
const CreateItemBtn = () => {
  return (
    <>
        <div className="border-2 border-stone-100 bg-stone-100 text-blue-700 w-fit p-1 px-4 rounded-3xl cursor-pointer h-10 font-heading">
        <Link
              to="/listproduct"
            >
              <p className="pt-1">List Product</p>
            </Link>
            
        </div>
    </>
  )
}

export default CreateItemBtn