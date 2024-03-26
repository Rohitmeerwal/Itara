"use client"
import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import { MailOutlined } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";

export default function ContactCard() {
  return (
    <div className="my-6 " id="contact">
    <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-5xl  rounded-md text-[#333] font-[sans-serif] border ">
        <div>
            <h1 className="text-3xl text-blue-400 font-extrabold">Let's Talk</h1>
            <p className="text-sm text-gray-400 mt-3">Have a grand project in mind? Let's bring your vision to life! Get in touch with us today to explore our exquisite marble and granite offerings.</p>
            <div className="mt-12">
                <h2 className="text-lg text-blue-400 font-extrabold">Email</h2>
                <ul className="mt-3">
                    <li className="flex items-center">
                        <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <MailOutlined />
                        </div>
                        <a target="_blank" href="#" className="text-[#007bff] text-sm ml-3">
                            <small className="block">Mail</small>
                            <strong>itaraindia@gmail.com</strong>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-12">
                <h2 className="text-lg text-blue-400 font-extrabold">Socials</h2>
                <ul className="flex mt-3 space-x-4">
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="https://wa.me/+918126111553">
                            <WhatsApp />
                        </a>
                    </li>
                    
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="https://www.instagram.com/itaraindia/">
                            <InstagramIcon/>
                        </a>
                    </li>
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="mailto:itaraindia@gmail.com">
                            <MailOutlined/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <form action="https://fabform.io/f/xxxxx" method="post" className="ml-auo space-y-4">
            <input type='text' name="name" placeholder='Name'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
            <input type='email'
                name='email'
                placeholder='Email'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
            <input type='text' placeholder='Subject'
                name='subject' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
            <textarea placeholder='Message' rows="6"
                name='message'
                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
            <button type='button' 
                className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
        </form>
    </div>
</div>
  )
}
