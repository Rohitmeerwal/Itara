import React from 'react'
import ProductCard from './ProductCard'
import Image from 'next/image'

export default function ProductsPage() {
  return (
    <div className='flex flex-col justify-center mt-10'>
    <h1 className=' text-5xl text-red-700 text-center  mt-10 font-extrabold'>Check Out Our Products</h1>
    <h1 className='text-4xl text-blue-700 text-center  mt-10 font-extrabold'>Granite</h1>
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
      <ProductCard imageUrl={"/kotdablack.jpg"} title={"Kotda Black Granite"}/>
      <ProductCard imageUrl={"/rajasthanblack.jpg"} title={"Rajasthan Black Granite"}/>
      <ProductCard imageUrl={"/cataisebrown.jpg"} title={"Cataise Brown Granite"}/>
      <ProductCard imageUrl={"/markinoblack.jpg"} title={"Markino Black Granite"}/>
      <ProductCard imageUrl={"/paradisoored.jpg"} title={"Paradiso-O-Red Granite"}/>
      <ProductCard imageUrl={"/pwhite.jpg"} title={"P White Granite"}/>
      <ProductCard imageUrl={"/rblack.jpg"} title={"R Black Granite"}/>
      <ProductCard imageUrl={"/tigerbrownmulti.jpg"} title={"Tiger Brown Multi Granite"}/>
    </div>
    <h1 className='text-4xl text-blue-700 text-center  mt-10 font-extrabold'>Marble</h1>
    <div className=' flex flex-wrap mt-5 justify-center'>
      <ProductCard imageUrl={"/aarnawhitemarble.jpg"} title={"Aarna White Marble"}/>
      <ProductCard imageUrl={"/agariyawhitemarble.jpg"} title={"Agariya White Marble"}/>
      <ProductCard imageUrl={"/brownmarble.jpg"} title={"Brown Marble"}/>
      <ProductCard imageUrl={"/dharmetawhitemarble.jpg"} title={"Dharmeta White Marble"}/>
      <ProductCard imageUrl={"/dolomitewhitemarble.jpg"} title={"Dolomite White Marble"}/>
      <ProductCard imageUrl={"/makranaalbetabrownmarble.jpg"} title={"Makrana Albeta Brown Marble"}/>
      <ProductCard imageUrl={"/makranawhitemarble.jpg"} title={"Makrana White Marble"}/>
      <ProductCard imageUrl={"/morwadwhitemarble.jpg"} title={"Morwad White Marble"}/>
      <ProductCard imageUrl={"/vietnamwhitemarble.jpg"} title={"Vietnam White Marble"}/>
      <ProductCard imageUrl={"/wonderwhite marble.jpg"} title={"Wonder White Marble"}/>
    </div>
  </div>
  )
}
