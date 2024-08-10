import { Link } from "react-router-dom";
const CheckOutBtn = () => {
  return (
    <>
        <Link
              to="/checkout"
            >
              <button className="rounded-2xl w-full border border-stone-200  bg-blue-700 text-white h-14 font-heading font-semibold text-lg shadow hover:shadow-md">Proceed to Check Out</button>
            </Link>
        
        
    </>
  )
}

export default CheckOutBtn