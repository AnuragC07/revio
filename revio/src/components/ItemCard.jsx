import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GetBtn from "./GetBtn";

const ItemCard = ({ image, category, title, description, price, product }) => {
  // If product is undefined, don't render the component
  if (!product) {
    return null;
  }

  return (
    <div className="w-fit max-h-96 shadow-md hover:shadow-lg max-w-64 min-w-56 p-3 rounded-2xl bg-white cursor-pointer">
      <Link to={`/product/${product._id}`}>
        <div className="flex justify-center items-center">
          <img src={image} alt="" className="rounded-xl max-h-40 w-full" />
        </div>
        <p className="bg-slate-400 text-white w-fit px-3 py-1 font-semibold rounded-2xl mt-3 text-xs">
          {category}
        </p>
        <h1 className="text-lg font-bold mt-2 max-h-8 overflow-hidden  font-heading">
          {title}
          </h1>
        <p className="text-sm font-medium mt-2 text-stone-400 min-h-14 max-h-14 overflow-hidden font-sub">
          {description}
        </p>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-700 font-heading">
            {price} {"₹"}
          </h2>
          <GetBtn />
        </div>
      </Link>
    </div>
  );
};

ItemCard.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  product: PropTypes.object,
};

export default ItemCard;
