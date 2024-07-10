import { Link } from "react-router-dom";
const BrowseMoreBtn = () => {
  return (
    <>
    <div className="border-2  text-blue-600 w-fit p-1 px-4 rounded-3xl cursor-pointer h-10 hover:border-blue-500 hover:text-blue-600">
        
        <Link
              to="/marketplace"
            >
              <p>Browse All Items</p>
            </Link>
    </div>
</>
  )
}

export default BrowseMoreBtn