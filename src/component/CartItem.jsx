import React from 'react'
import { MdDelete } from "react-icons/md";
import { remove } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';


const CartItem = ({item}) => {

  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  }

  return (
    <div className='max-w-[35rem] mx-auto flex justify-center gap-10 border-b-2 border-b-black pb-6'>
        <div className='max-h-[180px] max-w-[180px]'>
          <img className='w-full h-full' src={item.image} alt='product'/>
        </div>
        <div className='w-[45%] flex flex-col gap-3'>
          <h1 className=' text-gray-700 text-lg text-left mt-4 font-semibold'>{item.title}</h1>
          <p className=' text-gray-400 font-normal text-[10px] text-left'>{item.description.split(" ").slice(0,15).join(" ") + '...'}</p>
          <div className='flex justify-between'>
            <p className='text-green-600 font-bold'>${item.price}</p>
            <button className='w-[30px] h-[30px] rounded-full bg-red-300 grid place-items-center' onClick={removeFromCart}><MdDelete className='text-red-800'/></button>
          </div>
        </div>
    </div>
  )
}

export default CartItem;