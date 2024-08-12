"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import LogoutButton from "../logoutButton";
import NavbarList from "./NavbarList";
import { MobileNavbarProps } from "@/types";

const MobileNavbar = ({ links }: MobileNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMenu = () => setIsOpen(prev => !prev);

  return (
    <>
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
    </>
  )
}

export default MobileNavbar