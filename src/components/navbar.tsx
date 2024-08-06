"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LogoutButton from "./logoutButton";
import { links } from "@/constant";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="px-4 bg-white shadow-md fixed top-0 left-0 w-full flex items-center">
      <div className="container flex items-center justify-between ">
        {/* left side */}
        <div>
          {/* logo */}
          <Link href='/'>
            <Image
              src='/assets/images/logo.png'
              alt='logo'
              width={1000}
              height={1000}
              className='h-[18px] w-[160px] cursor-pointer'
            />
          </Link>
        </div>
        {/* right side */}
        <div className="hidden lg:flex items-center gap-9">
          {/* nav items */}
          <div className="flex items-center gap-1">
            <NavbarList links={links} />
          </div>
          <LogoutButton style={"h-fit bg-transparent hover:bg-gray-100 text-black p-4"} />
        </div>
        {/* mobile nav */}
        <div className="lg:hidden py-4" onClick={handleShowMenu}>
          <MenuIcon className="text-lg" />
        </div>
        <section className={cn("fixed top-0 right-0 h-full w-screen backdrop-blur bg-black/50 translate-x-full transition-all duration-300 lg:hidden", {
          'translate-x-0': isOpen === true
        })}>
          {/* sidebar content */}
          <section className="absolute top-0 right-0 bg-white text-black w-[250px] h-screen p-8">
            <div className="mb-4 w-fit cursor-pointer" onClick={handleShowMenu}>
              <XIcon className="text-lg" />
            </div>
            <div className="flex flex-col h-full justify-between pb-9">
              <div className="flex flex-col gap-1">
                <NavbarList sidebar={true} links={links} />
              </div>
              <LogoutButton />
            </div>
          </section>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;