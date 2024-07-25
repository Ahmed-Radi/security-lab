"use client";

import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const links = [
    {
      name: 'Home',
      href: '/',
      subLinks: [
        {
          name: 'Sub Home',
          href: '/sub'
        },
        // Adding fake data for demonstration
        {
          name: 'Sub Home 2',
          href: '/sub2'
        }
      ],
    },
    {
      name: 'Profile',
      href: "/profile",
      subLinks: [
        // Adding fake sub-links for the 'Profile' section
        {
          name: 'Edit Profile',
          href: '/profile/edit'
        },
        {
          name: 'Profile Settings',
          href: '/profile/settings'
        }
      ]
    },
    // Adding a completely new link with sub-links as fake data
    {
      name: 'About',
      href: '/about',
      subLinks: [
        {
          name: 'Company History',
          href: '/about/history'
        },
        {
          name: 'Our Team',
          href: '/about/team'
        }
      ]
    }
  ]

  const [isOpen, setIsOpen] = useState(false);
  const getMenuClasses = () => {
    let menuClass: string[] = []
    if(isOpen) {
      menuClass = [
        "flex",
        "absolute",
        "md:static",
        "top-[66px]",
        "left-0",
        "bg-white",
        "md:bg-transparent",
        // "text-gray-800",
        "w-full",
        "md:w-auto",
        "p-[20px]",
        "md:p-[0px]",
        "gap-[10px]",
        "flex-col",
        "md:flex-row",
      ]
    } else {
      menuClass = ["hidden", "md:flex"]
    }

    return menuClass.join(' ')
  }
  const handleShowMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className='shadow-lg bg-white z-[99999999] h-[64.5px] p-3 sm:p-4 md:flex md:justify-between md:items-center fixed top-0 w-full'>
      <div className="container h-[35px] max-auto flex justify-between items-center">
        <Link href='/' className=''>
          <Image
            src='/assets/images/logo.png'
            alt='logo'
            width={1000}
            height={1000}
            className='h-[18px] w-[160px] cursor-pointer'
          />
        </Link>
        <div className={getMenuClasses()}>
          {links.map((link, index) => (
            <Link href={link.href} className='mx-2 hover:text-gray-300' key={link.name}>{link.name}</Link>
          ))}
        </div>
        <div className='cursor-pointer md:hidden flex items-center' onClick={handleShowMenu}>
          {isOpen ? <XIcon /> : <MenuIcon />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;