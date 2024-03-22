"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { MailOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
              <span className="text-rose-600">I</span>TARA.
            </Link>
            <p className="max-w-xs mt-4 text-sm">
            Elevate your space with ITARA's premier Indian marble and granite. Experience timeless elegance and superior quality for your projects.
            </p>
            <div className="flex mt-8 space-x-6">
              <a
                href="/"
                target="_blank"
              >
                <FacebookOutlinedIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </a>
              <a
                href="mailto:itaraindia@gmail.com"
              >
                <MailOutlined className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </a>
              
              <a
                href="https://www.instagram.com/itaraindia/"
                target="_blank"
              >
                <InstagramIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/about"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  About
                </Link>
                
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Premium Marble
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Granite
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Installation
                </Link>
                
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/contact"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </Link>
                
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Returns Policy
                </Link>
                
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 ITARA - All rights reserved</p>
      </div>
      <a href="https://www.linkedin.com/in/piyush-verma-883a26248/" className="mt-2  items-end">
        Created with ❤️ by Piyush
      </a>
    </footer>
  );
};

export default Footer;
