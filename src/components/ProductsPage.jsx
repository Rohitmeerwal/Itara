import React from 'react'
import ProductCard from './ProductCard'
import Image from 'next/image'
import ProductCardd from './ProductCardd'

export default function ProductsPage() {
  return (
    <div className='flex flex-col justify-center mt-10'>
    <h1 className=' text-5xl text-red-700 text-center  mt-10 font-extrabold '>Check Out Our Products</h1>
    <h1 className='text-4xl text-white shadow-lg py-5 text-center mt-10 font-extrabold' style={{ backgroundImage: 'linear-gradient(to right, #ff0000, #ff00ff)' }}>Granite</h1>
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
    <h1 className='text-4xl text-white shadow-lg py-5 text-center mt-10 font-extrabold' style={{ backgroundImage: 'linear-gradient(to right, #ff0000, #ff00ff)' }}>Marble</h1>

    <div className=' flex flex-wrap mt-5 justify-center'>
      <ProductCardd imageUrl={"/aarnawhitemarble.jpg"} title={"Aarna White Marble"}/>
      <ProductCardd imageUrl={"/agariyawhitemarble.jpg"} title={"Agariya White Marble"}/>
      <ProductCardd imageUrl={"/brownmarble.jpg"} title={"Brown Marble"}/>
      <ProductCardd imageUrl={"/dharmetawhitemarble.jpg"} title={"Dharmeta White Marble"}/>
      <ProductCardd imageUrl={"/dolomitewhitemarble.jpg"} title={"Dolomite White Marble"}/>
      <ProductCardd imageUrl={"/makranaalbetabrownmarble.jpg"} title={"Makrana Albeta Brown Marble"}/>
      <ProductCardd imageUrl={"/makranawhitemarble.jpg"} title={"Makrana White Marble"}/>
      <ProductCardd imageUrl={"/morwadwhitemarble.jpg"} title={"Morwad White Marble"}/>
      <ProductCardd imageUrl={"/vietnamwhitemarble.jpg"} title={"Vietnam White Marble"}/>
      <ProductCardd imageUrl={"/wonderwhite marble.jpg"} title={"Wonder White Marble"}/>
    </div>
  </div>
  )
}
