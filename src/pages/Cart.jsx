import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../component/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  let {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc,curr) => acc+curr.price,0));
  },[cart]);
  
  return (
    <div>
      {
        cart.length > 0 ? 
        (
          <div className='flex justify-center gap-10'>
            <div className='flex flex-col gap-10 my-10'>
              {cart.map((item) => (<CartItem key={item.id} item={item}/>))}
            </div>
            <div className='flex flex-col text-left mt-14 justify-between w-3/12 h-[35rem]'>
              <div>
                <p className='text-green-800 font-bold uppercase'>Your Cart</p>
                <p className='text-green-800 font-bold uppercase text-4xl'>Summary</p>
                <p className='mt-3 text-green-800 font-bold'>Total Items: 
                  <span className='font-normal ml-2'>{cart.length}</span>
                </p>
              </div>
              <div className=''>
                <div className='font-semibold'>Total Amount: <span className='font-bold text-green-800'>${totalAmount}</span></div>
                <button className='w-full mx-auto bg-green-800 text-slate-100 p-2 rounded-md mt-2'>CheckOut Now</button>
              </div>
            </div>
          </div>
          
        ) : 
        <div className='w-full h-[90vh] flex flex-col justify-center items-center gap-3'>
          <h1 className='text-2xl'>Your Cart is Empty</h1>
          <Link to="/"><button className='w-[12rem] p-2 bg-green-700 rounded-md border font-semibold border-green-700 text-slate-100 hover:bg-white hover:text-green-700'>Shop Now</button></Link>
        </div>
      }
    </div>
  )
}

export default Cart