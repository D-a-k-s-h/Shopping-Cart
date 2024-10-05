import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { remove,add } from '../redux/slices/cartSlice';

const Product = ({post}) => {

    const {cart} = useSelector((state) => state);

    const dispatch = useDispatch();

    function addToCart(){
        dispatch(add(post));
        toast.success("Added To Cart");
    }

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Removed From Cart");
    }

  return (
    <div className='w-[16.5rem] flex flex-col items-center justify-between shadow-xl hover:scale-105 transition-all hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-200 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl '>
        <div>
            <p className='truncate text-gray-700 text-lg text-left w-40 mt-1 font-semibold'>{`${post.title.substr(0,17)}...`}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + '...'}</p>
        </div>
        <div className='max-h-[180px]'>
            <img src={post.image} alt='product pic' className='h-full w-full'/>
        </div>
        <div className='w-full flex justify-between items-center'>
            <p className='text-green-600 font-bold'>{`$${post.price}`}</p>
            {
                cart.some((p) => p.id === post.id) ? 
                <button onClick={removeFromCart} className='text-sm font-semibold border px-2 py-1 rounded-full text-black border-black hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300'>Remove Item</button>
                : 
                <button onClick={addToCart} className='text-sm font-semibold border px-2 py-1 rounded-full border-black hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300'>Add To Cart</button>
            }
        </div>
    </div>
  )
}

export default Product