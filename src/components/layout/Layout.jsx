import React from 'react';
import WhiteBox from './WhiteBox';
import NavBar from '../molecules/navBar/Navbar';

function Layout({children}) {
  return (
    <div className='bg-maingreen w-full fixed top-0 bottom-0 left-0 right-0 p-3 overflow-auto flex flex-col '>
      <NavBar />
      <div className='flex items-center justify-center w-full'>
        <WhiteBox children={children} ></WhiteBox>
        </div>
    </div>
  )
}

export default Layout