import { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import ItemCard from '../components/ItemCard';
import axios from "axios";

const Market = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <Navbar />
      <div className='m-5 mt-32'>
        <h1 className='font-heading text-4xl font-bold mb-9 ml-64'>Marketplace</h1>
        <div className='flex flex-row justify-around gap-10'>
          <div id='filters' className='w-36'>
            <h2 className='font-sub text-2xl font-semibold'>Filters</h2>
            <ul className='mt-5 flex flex-col gap-4 cursor-pointer'>
              <li className='rounded-xl bg-stone-100 w-full flex flex-col justify-center items-center h-10 text-blue-600 font-medium'>Books</li>
              <li className='rounded-xl bg-stone-100 w-full flex flex-col justify-center items-center h-10 text-blue-600 font-medium'>Notes</li>
              <li className='rounded-xl bg-stone-100 w-full flex flex-col justify-center items-center h-10 text-blue-600 font-medium'>Donations</li>
            </ul>
          </div>
          <div id='content' className='rounded-3xl p-5 w-5/6 flex flex-row gap-8 flex-wrap bg-stone-100'>
            {products.length > 0 ? (
              products.slice().reverse().map((product, index) => (
                <ItemCard
                  key={index}
                  image={`http://localhost:8000/images/${product.image}`}
                  category={product.category}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  product={product}
                />
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
