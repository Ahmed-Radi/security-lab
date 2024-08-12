import Image from "next/image";
import Link from "next/link";

import LogoutButton from "../logoutButton";
import { links } from "@/constant";
import NavbarList from "./NavbarList";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {

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
        <MobileNavbar links={links} />
      </div>
    </nav>
  );
};

export default Navbar;