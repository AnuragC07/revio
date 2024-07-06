import Navbar from '../components/Navbar';
import productimg from '../assets/download.jpeg';
import Buybutton from '../components/Buybutton';
import ItemCard from '../components/ItemCard';


const Productpage = () => {
  return (
    <>
        <Navbar />
        <div className='w-10/12 bg-white rounded-3xl mt-32 m-auto flex flex-row justify-between p-3 mb-4'>
            <div>
                <div className='flex '>
                    <img src={productimg} alt="" className='h-4/5 w-1/2 max-w-lg max-h-96 ml-3 mb-4 rounded-md'/>
                </div>
                <div className='flex flex-row gap-1'>
                    <img src={productimg} alt="" className='h-44 w-44 m-3 rounded-md'/>
                    <img src={productimg} alt="" className='h-44 w-44 m-3 rounded-md'/>
                    <img src={productimg} alt="" className='h-44 w-44 m-3 rounded-md'/>
                </div>
            </div>
            <div className=' rounded-3xl bg-stone-50 w-1/2 p-8 flex flex-col justify-between'>
                <div>
                    <h1 className='text-3xl font-heading font-bold'>ML Handbook</h1>
                    <div className='flex flex-row gap-5 mt-2'>
                        <p className='bg-blue-100 w-fit px-3 py-1 font-semibold rounded-2xl text-xs'>Book</p>
                        {/* <p className='font-sub font-bold text-slate-700'>PDF</p> */} 
                        {/* no pdf if its physical copy */}
                    </div>
                    <p className='text-blue-700 font-sub font-semibold mt-4 cursor-pointer'>by Adrian Miller</p>
                    <p className='font-sub text-lg font-medium text-stone-500 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore esse ab hic sequi quos cupiditate distinctio ut voluptas? Numquam, perspiciatis!</p>
                    <div className='flex justify-between'>
                     <h2 className='font-sub text-xl font-bold text-stone-600 mt-20'>Physical Copy</h2>
                     <h2 className='font-sub text-3xl font-bold text-blue-700 mt-20'>134 ₹</h2>
                    </div>
                    <h3 className='font-sub text-base font-bold text-stone-600'>1 Left</h3>
                    
                </div>
                <div className='mb-20'>
                    <Buybutton />
                </div>
            </div>
        </div>
        <h1 className='ml-40 font-heading font-bold text-2xl mt-32'>Related resources</h1>
        <div className='w-10/12 bg-stone-100 rounded-3xl mt-5 m-auto p-4 mb-4'>
            <div className='flex flex-row gap-7'>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    </>
  )
}

export default Productpage