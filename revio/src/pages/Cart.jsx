import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ItemCard from '../components/ItemCard';
import { useNavigate } from "react-router-dom";
import DeleteItemBtn from '../components/DeletItemBtn';
import CheckOutBtn from '../components/CheckOutBtn';
import GotoLoginBtn from '../components/GotoLoginBtn';

const Cart = () => {
  const [bag, setBag] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const savedBag = JSON.parse(localStorage.getItem('bag')) || [];
    setBag(savedBag);
  }, []);

  const removeFromBag = (productId) => {
    const updatedBag = bag.filter(product => product._id !== productId);
    setBag(updatedBag);
    localStorage.setItem('bag', JSON.stringify(updatedBag));
    navigate("/bag");
  };

  return (
    <>
      <Navbar />
      <div className='m-5 mt-32'>
        <h1 className='font-heading text-4xl font-bold mb-9 ml-20'>Your Bag</h1>
        <div className='flex flex-row justify-around gap-10 border rounded-3xl bg-stone-50'>
          <div className='flex flex-col  items-start gap-4 w-3/5 p-4'>
            {bag.length === 0 ? (
              <p>There are currently no items in your Bag. Go to Marketplace to add items</p>
            ) : (
              bag.map((product, index) => (
                <div key={index} className='flex justify-between rounded-xl p-2 gap-10'>
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
                  <div className='flex flex-col justify-between p-4'>
                    <div>
                      <h1 className='text-2xl font-semibold text-stone-700'>{product.title}</h1>
                      <p className='text-stone-500 font-semibold'>Quantity: 1</p>
                      <h2 className='text-2xl mt-8 text-stone-600 font-semibold'>Total: {product.price}</h2>
                    </div>
                    <button onClick={() => removeFromBag(product._id)}><DeleteItemBtn/></button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className=' mt-8 rounded-3xl border border-stone-100 bg-white shadow-md w-1/4 p-6 flex flex-col justify-between h-96'>
            <div>
              <h1 className='text-3xl font-heading font-bold'>Order Summary</h1>
              <hr className='mt-4 mb-6'/>
              <h2 className='text-2xl font-heading font-bold text-stone-600 mt-5'>Sub Total</h2>
              <h2 className='text-2xl font-heading font-bold text-blue-700 mt-10'>{bag.reduce((total, product) => total + product.price, 0)} ₹</h2>
            </div>
            <div>
              {token ? <CheckOutBtn/> : <GotoLoginBtn/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
