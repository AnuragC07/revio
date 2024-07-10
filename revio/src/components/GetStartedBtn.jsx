import { Link } from "react-router-dom";
const GetStartedBtn = () => {
  return (
    <>
        <div className="border-2 border-blue-500 bg-blue-500 text-white w-fit p-1 px-4 rounded-3xl cursor-pointer h-10 font-heading">
        <Link
              to="/signup"
            >
              <p className="pt-1">Get Started</p>
            </Link>
            
        </div>
    </>
  )
}

export default GetStartedBtn