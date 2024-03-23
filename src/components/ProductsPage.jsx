import React from 'react'
import ProductCard from './ProductCard'
import Image from 'next/image'

export default function ProductsPage() {
  return (
    <div className='flex flex-col justify-center mt-10'>
    <h1 className=' text-5xl text-red-700 text-center  mt-10 font-extrabold'>Check Out Our Products</h1>
    <div className=' flex flex-wrap mt-5 justify-center'>
      <ProductCard imageUrl={"/desert-green-granite.jpg"} title={"Desert Green Granite"}/>
      <ProductCard imageUrl={"/forest-black-granite (1).jpg"} title={"Forest Black Granite"}/>
      <ProductCard imageUrl={"/multi-o-red.jpeg"} title={"Multi-O-Red Granite"}/>
      <ProductCard imageUrl={"/paradiso brown granite.jpeg"} title={"Paradiso Brown Granite"}/>
      <ProductCard imageUrl={"/pearl-black-granite.jpg"} title={"Pearl Black Granite"}/>
      <ProductCard imageUrl={"/pearl-brown granite.jpg"} title={"Pearl Brown Granite"}/>
      <ProductCard imageUrl={"/river-black-granite.jpg"} title={"River Black Granite"}/>
      <ProductCard imageUrl={"/tiger-brown-granite.jpg"} title={"Tiger Brown Granite"}/>
      <ProductCard imageUrl={"/viscon-white-granite.jpg"} title={"Viscon White Granite"}/>
      
    </div>
  </div>
  )
}
