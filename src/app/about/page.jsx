import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section className="about-section py-16 lg:py-24 m-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Content Column */}
          <div className="content-column md:w-1/2 order-2 md:order-1">
            <div className="p-4 md:p-0">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
Welcome to ITARA: Unveiling Timeless Elegance</h2>
                <p className="text-gray-700 mt-4">
                At ITARA, we're dedicated to curating the finest selection of Indian marble and granite, embodying the rich heritage and craftsmanship of our nation. Our journey began with a passion for transforming spaces into timeless masterpieces, and today, we stand as a beacon of quality and elegance in the industry.  </p>
                
              </div>
              <div className="btn-box">
                <Link href="/contact" className="btn-style-one bg-blue-600 py-2 px-3 text-white rounded-lg">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column md:w-1/2 order-1 md:order-2">
            <div className="md:p-0 flex justify-center items-center">
              <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <img src="https://royalgranitemarbles.com/wp-content/uploads/2017/01/home_banner2.png" alt="Rahul Kumar Yadav" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
