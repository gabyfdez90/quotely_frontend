import React from 'react'

function WhiteBox({children}) {
  return (
    <div className='w-10/12 bg-white rounded p-10 mt-14 ml-3 '>
      {children}
    </div>
  )
}

export default WhiteBox