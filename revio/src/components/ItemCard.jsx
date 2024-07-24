import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GetBtn from "./GetBtn";

const ItemCard = ({ image, category, title, description, price, product }) => {
  // If product is undefined, don't render the component
  if (!product) {
    return null;
  }

  return (
    <div className="w-fit shadow-md hover:shadow-lg max-w-64 min-w-56 p-3 rounded-2xl bg-white cursor-pointer">
      <Link to={`/product/${product._id}`}>
        <div className="flex justify-center items-center">
          <img src={image} alt="" className="rounded-xl max-h-40 w-full" />
        </div>
        <p className="bg-blue-100 w-fit px-3 py-1 font-semibold rounded-2xl mt-3 text-xs">
          {category}
        </p>
        <h1 className="text-xl font-bold mt-2 font-heading">{title}</h1>
        <p className="text-sm font-medium text-stone-400 max-h-20 overflow-hidden font-sub">
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
