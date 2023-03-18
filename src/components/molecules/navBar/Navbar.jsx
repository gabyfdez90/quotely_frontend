import { useState } from 'react';
import React from 'react';
import logo from "./../../../assets/img/quotelyLogo.png";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

function NavBar() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  }

  return (
    <div className="flex flex-col w-100 h-20">
        <div className="flex items-center flex-shrink-0">
          <div className="flex items-center">
            <HiOutlineMenuAlt1  onClick={toggleDrawer}  id="drawer-toggle" className="h-40 w-20 sm:text-base"/>
            <img src={logo} alt="quotely Logo" className="h-25 w-56 m-4 sm:w-30" />
          </div>
        </div>
        <div className="flex flex-col">
        <div className={`fixed pt-2 top-40 left-0 z-20 w-64 h-full transition-all duration-500 transform ${showDrawer ? 'translate-x-0' : '-translate-x-full'} bg-maingreen shadow-lg`}>
          <div className="px-6 py-4">
            <div className="text-lg font-semibold font-sans p-7 mb-10 bg-mustard" typeof='button'>
              <p>Add quote</p>
              </div>
            <div className= "p-4 mt-4 font-sans bg-mustard flex-center align-center" typeof='button'>
              <p>Collection</p>
            </div>
            <div className= "p-4 mt-4 font-sans bg-mustard flex-center align-center" typeof='button'>
              <p>Genre</p>
            </div>
            <div className= "p-4 mt-4 font-sans bg-mustard flex-center align-center" typeof='button'>
              <p>Author</p>
            </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default NavBar