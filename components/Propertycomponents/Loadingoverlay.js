import React from 'react'

const Loadingoverlay = () => {
  return (
    <div className='absolute top-0 right-0 left-0 bottom-0 w-full h-screen backdrop-brightness-50 flex justify-center items-center bg-white '>
        <p className='loader z-50 absolute'></p>
    </div>
  )
}

export default Loadingoverlay