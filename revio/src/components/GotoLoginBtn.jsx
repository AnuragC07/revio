import { Link } from "react-router-dom";
const GotoLoginBtn = () => {
  return (
    <>
        <Link
              to="/login"
            >
              <button className="rounded-2xl w-full border border-stone-200  bg-blue-700 text-white h-14 font-heading font-semibold text-lg shadow hover:shadow-md">Login to Check Out</button>
            </Link>
        
        
    </>
  )
}

export default GotoLoginBtn