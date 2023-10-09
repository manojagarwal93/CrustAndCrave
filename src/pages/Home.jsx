import React from 'react'
import Navbar from '../components/navbar'
import CategoryMenu from '../components/categoryMenu'
import Fooditems from '../components/Fooditems'
import Cart from '../components/Cart'


export const Home = () => {
  return (
   <>
   <Navbar/>
   <CategoryMenu/>
   <Fooditems/>
   <Cart/>
   </>
  )
}

export default Home
