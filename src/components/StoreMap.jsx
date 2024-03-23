import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function StoreMap() {
  return (
    <div className="w-full flex items-center justify-evenly flex-wrap gap-10 ">
      
      <div className='w-full flex items-center justify-evenly flex-wrap gap-10 '>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Location: </h1>
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt />
            <p>63/54, chawli near COD, Agra</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
          <FaPhoneAlt />
          <a href="tel:+16128768567">+1(612)-876-8567</a>,
          <a href="tel:+918126111553">(+91) 8126111553</a>
        </div>
          <div className="flex items-center gap-2 text-sm">
            <FaStar />
            <p>4.5 (100+ reviews)</p>
          </div>
        </div>
        <div className=" ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d753.445296618905!2d77.99380078363542!3d27.137717974050414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDA4JzE1LjYiTiA3N8KwNTknMzguNiJF!5e0!3m2!1sen!2sin!4v1711074407326!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='h-[30rem] md:w-[50rem] w-[20rem] rounded-2xl'></iframe>
        </div>
      </div>
    </div>
  );
}
