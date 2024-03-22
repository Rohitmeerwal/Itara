import React from 'react'

export default function ProductCard() {
  return (
    <div className='mt-20'>
      <section className="section-3">
      
      <div className="flex flex-wrap justify-center h-[20rem] w-[15rem]">
        <figure className="figure mx-4 my-6 relative overflow-hidden rounded-lg">
          <img src="https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="w-full h-auto" alt="Winter Collection" />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white py-2 px-4">
            <h3 className="text-[#196845]  font-extrabold text-2xl">Collection</h3>
          </figcaption>
          <a href="#" className="absolute top-0 left-0 w-full h-full"></a>
        </figure>
      </div>
    </section>
    </div>
  )
}
