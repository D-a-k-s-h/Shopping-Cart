import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div className='max-w-6xl flex justify-between items-center h-[4rem] mx-auto bg-slate-900'>
        <div className='w-8/12 mx-auto flex justify-between'>
          <div>
              <NavLink to='/'><img src='logo.png' width={150} alt='logo'/></NavLink>
          </div>
          <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
              <NavLink to='/'><p className='hover:text-green-500 transition-all duration-200'>Home</p></NavLink>
              <div className='relative'>
                <div>
                {
                    cart.length > 0 && <span className='absolute -top-2 -right-3 text-xs text-white animate-bounce flex justify-center items-center w-5 h-5 rounded-full bg-green-600'>{cart.length}</span>
                }
                </div>
                <NavLink to='/cart'><FaCartShopping/></NavLink>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar