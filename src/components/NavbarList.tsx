"use client";

import { useState } from "react";
import NavbarListItem from "./NavbarListItem";
import DropdownList from "./DropdownList";
import { NavbarLinks, NavbarListProps } from "@/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const NavbarList = ({ links, sidebar = false }: NavbarListProps) => {
	const pathname = usePathname().slice(1);
	const [openDropdown, setOpenDropdown] = useState<number | null>(null);

	const handleDropdownClick = (index: number) => {
		setOpenDropdown(openDropdown === index ? null : index);
	};

	return (
		<>
			{links.map((link: NavbarLinks, index: number) => {
				return link.subLinks ? (
					<div
						className={cn(
							"p-3 relative text-black text-lg font-semibold hover:bg-gray-100 cursor-pointer", {
								"text-blue-400": pathname.toLowerCase().includes(link.name.toLowerCase()),
							}
						)}
						key={link.name}
						onClick={() => handleDropdownClick(index)}>
						<span className='flex gap-1 items-center'>
							{link.name}
							<ChevronDown
								size={16}
								className={cn("", {
									"rotate-180 transition-all duration-300": openDropdown === index,
								})}
							/>
						</span>
						{openDropdown === index && (
							<DropdownList
								listItems={link.subLinks!}
								isOpenDropdown={openDropdown === index}
								sidebar={sidebar}
							/>
						)}
					</div>
				) : (
					<NavbarListItem key={link.name} {...link} />
				);
			})}
		</>
	);
};

export default NavbarList;
