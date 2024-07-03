import book from '../assets/download.jpeg';
// import notes1 from '../assets/download (1).jpeg';
// import notes2 from '../assets/download (2).jpeg';


import GetBtn from './GetBtn';
const ItemCard = () => {
  return (
    <>
        <div className='w-fit shadow-md hover:shadow-lg max-w-64 min-w-56 p-3 rounded-2xl bg-white cursor-pointer'>
            <div className='flex justify-center items-center'>
                <img src={book} alt="" className='rounded-xl max-h-40 w-full'/>   
            </div>
            <p className='bg-blue-100 w-fit px-3 py-1 font-semibold rounded-2xl mt-3 text-xs'>Book</p>
            <h1 className='text-xl font-bold mt-2 font-heading'>ML in Production</h1>
            <p className='text-sm font-medium text-stone-400 max-h-20 overflow-hidden font-sub'>Lorem ipsum dolor sit, amet consectetur Lorem ipsum </p>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='text-2xl font-bold text-blue-700 font-heading'>125₹</h2>
                <GetBtn />
            </div>
        </div>
    </>
  )
}

export default ItemCard