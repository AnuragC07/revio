import Navbar from '../components/Navbar';
import ItemCard from '../components/ItemCard';
import DeleteItemBtn from '../components/DeletItemBtn';
import CheckOutBtn from '../components/CheckOutBtn';


const Cart = () => {
  return (
    <>
    <Navbar />
        <div className='m-5 mt-32'>
          <h1 className='font-heading text-4xl font-bold mb-9 ml-20'>Your Bag</h1>
          <div className='flex flex-row justify-around gap-10'>
            <div className='flex flex-col gap-4 w-3/5 p-4'>
                <div className='flex justify-between rounded-xl p-2'>
                    <ItemCard />
                    <div className='flex flex-col justify-between p-4'>
                        <div>
                            <h1 className='text-2xl font-semibold text-stone-500'>ML Handbook</h1>
                            <p className='text-stone-500'>Quantity: 2</p>
                            <h2 className='text-2xl mt-8 text-stone-400 font-semibold'>Total: 123</h2>
                        </div>
                        <button><DeleteItemBtn/></button>
                    </div>
                </div>
                <div className='flex justify-between rounded-xl p-2'>
                    <ItemCard />
                    <div className='flex flex-col justify-between p-4'>
                        <div>
                            <h1 className='text-2xl'>ML Handbook</h1>
                            <p>Quantity: 2</p>
                            <h2 className='text-2xl mt-8'>Total: 123</h2>
                        </div>
                        <button><DeleteItemBtn /></button>
                    </div>
                </div>
                
            </div>
            
            
            <div className=' rounded-3xl bg-stone-100 w-1/4 p-8 flex flex-col justify-between h-96'>
                <div>
                    <h1 className='text-3xl font-heading font-bold'>Order Summary</h1>
                    <h2 className='text-2xl font-heading font-bold text-blue-700 mt-5'>Sub Total</h2>
                    <h2 className='text-2xl font-heading font-bold text-blue-700'>345</h2>
                </div>
                <div className=''>
                    <CheckOutBtn />
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cart