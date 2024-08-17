import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import axios from "axios";

const Market = () => {
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
      });
  }, []);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProducts = selectedFilter
    ? products.filter((product) => product.category === selectedFilter)
    : products;

  return (
    <>
      <Navbar />
      <div className="m-5 mt-32">
        <h1 className="font-heading text-4xl font-bold mb-9 ml-64">
          Marketplace
        </h1>
        <div className="flex flex-row justify-around gap-10">
          <div id="filters" className="w-36">
            <h2 className="font-sub text-2xl font-semibold">Filters</h2>
            <ul className="mt-5 flex flex-col gap-4 cursor-pointer">
              {["Book", "Notes", "Donation"].map((filter) => (
                <li
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`rounded-xl w-full flex flex-col justify-center items-center h-10 font-medium ${
                    selectedFilter === filter
                      ? "bg-blue-600 text-white"
                      : "bg-stone-100 text-blue-600"
                  }`}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
          <div
            id="content"
            className="rounded-3xl p-5  w-full flex flex-row gap-7 flex-wrap bg-neutral-50"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts
                .slice()
                .reverse()
                .map((product, index) => (
                  <ItemCard
                    key={index}
                    image={
                      product.file
                        ? `http://localhost:8000/files/coverFile/${product.image}`
                        : `http://localhost:8000/images/${product.image}`
                    }
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    product={product}
                  />
                ))
            ) : (
              <p className="font-heading text-stone-500 text-lg">
                Currently no products available. Try searching for other
                materials instead.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
