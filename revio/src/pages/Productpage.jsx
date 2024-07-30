import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';


const Productpage = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`http://localhost:8000/${id}`)
          .then((response) => {
            setProduct(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

    const addToBag = (product) => {
        const currentBag = JSON.parse(localStorage.getItem('bag')) || [];
        localStorage.setItem('bag', JSON.stringify([...currentBag, product]));
    };

    return (
      <>
        <Navbar />
        <div className='w-10/12 bg-white rounded-3xl mt-32 m-auto flex flex-row justify-between p-3 mb-4'>
            <div>
                <div className='flex '>
                    <img src={`http://localhost:8000/images/${product.image}`} alt="" className='h-4/5 w-1/2 max-w-lg max-h-96 ml-3 mb-4 rounded-md'/>
                </div>
                <div className='flex flex-row gap-1'>
                    <img src={`http://localhost:8000/images/${product.previewImage1}`} alt="" className='h-44 w-44 m-3 rounded-md'/>
                    <img src={`http://localhost:8000/images/${product.previewImage2}`} alt="" className='h-44 w-44 m-3 rounded-md'/>
                    <img src={`http://localhost:8000/images/${product.previewImage3}`} alt="" className='h-44 w-44 m-3 rounded-md'/>
                </div>
            </div>
            <div className=' rounded-3xl border border-stone-100 bg-stone-50 shadow-md w-1/2 p-8 flex flex-col justify-between'>
                <div>
                    <h1 className='text-3xl font-heading font-bold'>{product.title}</h1>
                    <div className='flex flex-row gap-5 mt-2'>
                        <p className='bg-slate-600 text-white w-fit px-3 py-1 font-semibold rounded-2xl text-xs'>{product.category}</p>
                        {/* <p className='font-sub font-bold text-slate-700'>PDF</p> */}
                    </div>
                    <p className='text-blue-700 font-sub font-semibold mt-4 cursor-pointer'>{"by"} {product.seller}</p>
                    <hr className="mb-8 mt-2 text-white"/>
                    <p className='font-sub text-lg font-medium text-stone-500 mt-3'>{product.description}</p>
                    <div className='flex justify-between'>
                     <h2 className='font-sub text-2xl font-bold text-stone-600 mt-20'>{product.productType}</h2>
                     <h2 className='font-sub text-3xl font-bold text-blue-700 mt-20'>{product.price}{"₹"}</h2>
                    </div>
                    <h3 className='font-sub text-base font-bold text-stone-600'>{product.quantity}{" Left"}</h3>
                </div>
                <div className='mb-10 flex flex-row justify-between mx-8'>
                    <button onClick={() => addToBag(product)} className='rounded-2xl w-72 h-14 border border-stone-200  bg-white text-blue-700 px-4 py-2 flex justify-between mx-2 font-bold font-heading text-xl items-center shadow-md hover:shadow-lg'>
                        <h2>Add to Bag</h2>
                        <LocalMallRoundedIcon />
                    </button>
                    <Link to="/bag">
                        <button  className='rounded-2xl w-40 h-14 font-semibold font-heading text-lg border border-stone-200  bg-blue-600 text-white shadow-md'>
                            <h2>Go to Bag</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        {/* <h1 className='ml-40 font-heading font-bold text-2xl mt-32'>Related resources</h1>
        <div className='w-10/12 bg-stone-100 rounded-3xl mt-5 m-auto p-4 mb-4'>
        </div> */}
      </>
    );
};

export default Productpage;
