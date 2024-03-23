// Import necessary icons and components
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { MailOutlined } from "@mui/icons-material";
import { useTheme } from "next-themes"; // Import useTheme hook
import { WhatsApp } from "@mui/icons-material";

// Define Footer component
const Footer = () => {
  // Access theme using useTheme hook
  const { theme } = useTheme();

  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"}>
              {/* Conditionally render logo based on the theme */}
              {theme === "dark" ? (
                <img src="/logo-light.png" className="h-10" alt="Light Logo" />
              ) : (
                <img src="/logo-dark.png" className="h-10" alt="Dark Logo" />
              )}
            </Link>
            <p className="max-w-xs mt-4 text-sm">
            ITARA is dedicated and committed to export the Natural Stone with the highest quality standards and providing the best customer services. Established in Agra, city known for Taj Mahal which is one of the most iconic and recognized monuments in the world, known for its marblework. We provide the highest quality of stone meeting the standard of this monuments.
            </p>
            <div className="flex mt-8 space-x-6">
              <a href="https://wa.me/+918126111553" target="_blank">
                <WhatsApp className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </a>
              <a href="mailto:itaraindia@gmail.com">
                <MailOutlined className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </a>

              <a href="https://www.instagram.com/itaraindia/" target="_blank">
                <InstagramIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Second Column - Links */}
          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            {/* Company */}
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
            {/* Services */}
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
            {/* Helpful Links */}
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
            {/* Legal */}
            
          </div>
        </div>
        {/* Copyright */}
        <p className="mt-8 text-xs">© 2024 ITARA - All rights reserved</p>
      </div>
      {/* Footer Note */}
      <a
        href="https://www.linkedin.com/in/piyush-verma-883a26248/"
        className="mt-2  items-end"
      >
        Created with ❤️ by Piyush
      </a>
    </footer>
  );
};

export default Footer; // Export Footer component
