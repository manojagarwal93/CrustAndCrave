import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

export const Success = () => {
  const [loading,setloading]= useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [])
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {
         loading ? ( <PropagateLoader color="#36d7b7" />) :(  <div>
         <h2 className='text-3xl font-semibold mb-4 text-center '>
           Order Successfull!
         </h2>
         <p>
           Your Order has been successfully placed
         </p>
         </div>

      )}
     
    </div>
  )
}
export default Success